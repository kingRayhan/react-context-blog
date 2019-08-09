import React from 'react'
import { render } from 'react-dom'
import Router from './Router'
// import AppContextProvider from './context/AppContextProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogContextProvider from './contexts/BlogContextProvider'

render(
    <BlogContextProvider>
        <Router />
    </BlogContextProvider>,

    document.getElementById('root')
)
