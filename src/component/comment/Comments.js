import React from 'react'

//graphql
import { GET_COMMENTS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'

//materialUi
import { Avatar, Box, Grid, Typography } from '@mui/material'

const Comments = ({ slug }) => {
    
  const { loading, errors, data } = useQuery(GET_COMMENTS, {
    variables: { slug: slug },
  })

  if (loading) return ''
  if (errors) return <h4>Sth went wrong ...</h4>

  return (
    <Grid
      container
      sx={{
        boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.length > 0 ? (
          data.comments.map((comment) => (
            <Grid
              item
              xs={12}
              m={2}
              p={2}
              key={comment.id}
              border="1px solid silver"
              borderRadius={1}
            >
              <Box
                component="div"
                sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}
              >
                <Avatar>{comment.name[0]}</Avatar>
                <Typography
                  component="span"
                  variant="p"
                  fontWeight={700}
                  mr={2}
                >
                  {comment.name}
                </Typography>
              </Box>
              <Typography component="p" variant="p">
                {comment.text}
              </Typography>
            </Grid>
          ))
        ) : (
          <Typography component="p" variant="p" mt={1} fontWeight={400}>
            کامنتی وجود ندارد
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default Comments
