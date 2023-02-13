import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Divider,
  Button
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CardEl = ({ title, slug, coverPhoto, author }) => {
  return (
    <Card sx={{ boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius: 4 }}>
      {
        author && (
          <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{marginLeft : 2}} />} 
          title={<Typography component='p' variant='p' color='text.secondary'>{author.name}</Typography>}
         />
        ) 
      }
      <CardMedia component='img' height='194' image={coverPhoto.url} alt={slug} />
      <CardContent>
        <Typography component='p' variant='span' color='text.primary' fontWeight={600}>{title}</Typography>
      </CardContent>
      <Divider variant='middle' xs={{margin : '10px'}}/>
      <CardActions>
         <Link to={`/blogs/${slug}`} style={{textDecoration:'none' , width: '100%'}} >
            <Button variant='outlined' size='small' sx={{width : '100%' , borderRadius : 2}}>مطالعه مقاله</Button>
         </Link>
      </CardActions>
    </Card>
  )
}

export default CardEl
