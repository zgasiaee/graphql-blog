import React from 'react';
import { Link } from 'react-router-dom';

//materialUi
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth='lg'>
            <Toolbar>
                <Typography component='h1' varient='h5' fontWeight='700' flex={1}>
                    <Link to='/' style={{textDecoration : 'none' , color : '#fff'}}>وبلاگ</Link>
                </Typography>
                <Link to='/' style={{color : '#fff'}}> <BookIcon/></Link>  
            </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;