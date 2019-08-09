import React from 'react'
import { Container } from 'reactstrap'

import Header from './Header'
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container className="my-3">{children}</Container>
        </>
    )
}

export default Layout
