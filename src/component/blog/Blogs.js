import React from 'react';

//materialUi
import { Grid } from '@mui/material';

//graphql
import { useQuery } from '@apollo/client';
import { GET_BLOGS } from '../../graphql/queries';

//component
import CardEl from '../shared/CardEl';
import Loader from '../shared/Loader';

const Blogs = () => {

    const {data , loading , errors} = useQuery(GET_BLOGS)

    if(loading)  return <Loader/>
    if(errors)  return <h4>Sth went wrong ...</h4>

    return (
        <Grid container spacing={2}>
             {
               data.posts.map(post =>  (
                   <Grid item xs={12} sm={6} md={4} key={post.id}>
                       <CardEl {...post} />
                   </Grid>
               ))
             }
        </Grid>
    );
};

export default Blogs;