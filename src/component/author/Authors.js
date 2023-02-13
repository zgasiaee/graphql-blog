import React from 'react'
import { Link } from 'react-router-dom'

//graphql
import { useQuery } from '@apollo/client'
import { GET_AUTHORS } from '../../graphql/queries'

//materialUi
import { Grid, Typography , Avatar, Divider } from '@mui/material'

//component
import Loader from '../shared/Loader'

const Authors = () => {
  
  const { data, loading, errors } = useQuery(GET_AUTHORS)

  if (loading) return <Loader/>
  if (errors) return <h4>Sth went wrong ...</h4>

  return (
    <Grid container sx={{ boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius: 4 }}>
          {
            data.authors.map((author , index) => (
              <React.Fragment key={author.id}>
                <Grid item xs={12} padding={2}> 
                  <Link to={`/authors/${author.slug}`} style={{textDecoration:'none' , display : 'flex' , alignItems : 'center' }} >
                    <Avatar src={author.avatar.url} alt='avatar' />
                    <Typography component='p' variant='p' color='text.secondary'ml={2}>{author.name}</Typography>
                  </Link>
                </Grid>
                {
                  index != data.authors.length - 1 &&  <Grid item xs={12}> <Divider variant='middle' /></Grid> 
                }
              </React.Fragment>
            ))
          } 
    </Grid>
  )
}

export default Authors
