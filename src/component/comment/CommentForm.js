import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//graphql
import { useMutation } from '@apollo/client'
import { CREATE_COMMENT } from '../../graphql/mutations'

//materialUi
import { Button, Grid, Typography } from '@mui/material'
import TextField from 'mui-rtl-textfield'

const CommentForm = ({ slug }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const [createComment, { data, loading, errors }] = useMutation(
    CREATE_COMMENT,
    {
      variables: { name: name, email: email, text: text, slug: slug },
    },
  )

  const sendHandler = () => {
    if (name && email && text) {
      createComment()
    } else {
      toast.warn('تمام قیلدها را پر کنید', { position: 'top-center' })
    }

    if (data) {
      toast.success('کامنت منتظر تایید می باشد', {
        position: 'top-center',
      })
    }
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: '100%'}}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: '100%' }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: '100%' }}
          value={text}
          onChange={(event) => setText(event.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            ... در حال ارسال
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  )
}

export default CommentForm
