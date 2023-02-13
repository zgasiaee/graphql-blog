import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

//graphql
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

//materialUi
import { theme } from './mui/theme.js'
import { ThemeProvider } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

//style
import './styles/index.css'
import './styles/fonts.css'

const client = new ApolloClient({
  uri : process.env.REACT_APP_GRAPHCMS_URI ,
  cache : new InMemoryCache(),
})

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <CacheProvider value={cacheRtl}>
     <ApolloProvider client={client}>
     <BrowserRouter>
       <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
     </BrowserRouter>
  </ApolloProvider>,
  </CacheProvider>
)
