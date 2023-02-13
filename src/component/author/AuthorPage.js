import React from 'react'
import { useParams } from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'

//graphql
import { useQuery } from '@apollo/client'
import { GET_AUTHOR } from '../../graphql/queries'

//materialUi
import { Container } from '@mui/system'
import { Avatar, Grid, Typography } from '@mui/material'

//component
import CardEl from '../shared/CardEl.js'
import Loader from '../shared/Loader'

const AuthorPage = () => {
  
  const { slug } = useParams()
  const { loading, data, errors } = useQuery(GET_AUTHOR, {
    variables: { slug: slug },
  })

  if (loading) return <Loader/>
  if (errors) return <h4>Sth went wrong ...</h4>

  const { name, field, description, posts, avatar } = data.author

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            src={avatar.url}
            alt="avatar"
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEl
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AuthorPage
