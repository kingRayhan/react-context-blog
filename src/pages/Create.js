import React, { useState, useContext } from 'react'
import { Form, FormGroup, Input, Label, Row, Col, Button } from 'reactstrap'
import { BlogContext } from '../contexts/BlogContextProvider'
const Create = ({ history }) => {
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')

    let { addPost } = useContext(BlogContext)

    const savePost = e => {
        e.preventDefault()
        if (title == '' || body == '') return alert('Title and body is required')
        addPost(title, body)

        setTitle('')
        setBody('')

        alert('Post created')

        history.push('/')
    }

    return (
        <Row>
            <Col md={8} className="mx-auto">
                <h1>Create</h1>
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
                        <Button color="primary">Add Post</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    )
}

export default Create
