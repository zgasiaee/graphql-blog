import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import sanitizeHtml from 'sanitize-html'

//materialUi
import { Container, Box } from '@mui/system'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { Avatar, Grid, Typography } from '@mui/material'

//graphql
import { GET_BLOG } from '../../graphql/queries'
import { useQuery } from '@apollo/client'

//component
import CommentForm from '../comment/CommentForm'
import Comments from '../comment/Comments'
import Loader from '../shared/Loader'

const BlogPage = () => {
  
  const { slug } = useParams()
  const navigate = useNavigate()

  const { loading, errors, data } = useQuery(GET_BLOG, {
    variables: { slug: slug },
  })

  if (loading) return <Loader />
  if (errors) return <h4>Sth went wrong ...</h4>

  const { title, coverPhoto, author, content } = data.post

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          mt={9}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            component="h3"
            variant="h4"
            fontWeight={700}
            color="primary"
          >
            {title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          mt={7}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar
            src={author.avatar.url}
            sx={{ width: 80, height: 80, marginRight: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(content.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
           <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
           <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogPage
