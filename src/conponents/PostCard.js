import React, { useContext } from 'react'
import { Card, CardHeader, CardBody, Button, CardFooter, ButtonGroup } from 'reactstrap'
import { BlogContext } from '../contexts/BlogContextProvider'

import { Link } from 'react-router-dom'

const PostCard = ({ id, title, body }) => {
    let { deletePost } = useContext(BlogContext)

    return (
        <Card className="my-3">
            <CardHeader>{title}</CardHeader>
            <CardBody>{body}</CardBody>
            <CardFooter>
                <ButtonGroup className="float-right">
                    <Button onClick={() => window.confirm('Sure to delete?') && deletePost(id)} color="danger">
                        Delete
                    </Button>
                    <Link className="btn btn-info" to={`/edit/${id}`}>
                        Edit
                    </Link>
                    <Link className="btn btn-primary" to={`${id}`}>
                        Read
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default PostCard
