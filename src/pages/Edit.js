import React, { useState, useContext, useEffect } from 'react'
import { Form, FormGroup, Input, Label, Row, Col, Button } from 'reactstrap'
import { BlogContext } from '../contexts/BlogContextProvider'
const UpdatePost = ({ history, match }) => {
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    let postId = match.params.postid
    let { getPost, updatePost } = useContext(BlogContext)

    useEffect(() => {
        let { title, body } = getPost(postId)
        setTitle(title)
        setBody(body)
    }, [])

    const savePost = e => {
        e.preventDefault()
        if (title === '' || body === '') return alert('Title and body is required')
        updatePost(postId, { id: postId, title, body })
        setTitle('')
        setBody('')
        alert('Post created')
        history.push('/')
    }

    return (
        <Row>
            <Col md={8} className="mx-auto">
                <h1>Update Post</h1>
                <Form onSubmit={savePost}>
                    <FormGroup>
                        <Label htmlFor="title">Post Title</Label>
                        <Input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            id="title"
                            placeholder="Post Title"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="body">Post Title</Label>
                        <Input
                            onChange={e => setBody(e.target.value)}
                            rows="8"
                            type="textarea"
                            id="body"
                            value={body}
                            placeholder="Post Title"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary">Save</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    )
}

export default UpdatePost
