import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import { Container, Row, Col, Form, Button, Card, Table } from 'react-bootstrap';

const AddModules = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [department, setDepartment] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [modules, setModules] = useState([]);


    // Fetch all modules
    useEffect(() => {
        const fetchModules = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:4000/api/modules', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the Authorization header
                    }
                })
                setModules(response.data);
            } catch (error) {
                console.error('Error fetching modules:', error);
            }
        };
        fetchModules();
    }, [modules]);

    const handleUploadModule = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('department', department);
        formData.append('content', editorContent);
        if (video) formData.append('video', video);
        if (image) formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:4000/api/modules/upload-module', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            alert('Module uploaded successfully!');
            setModules([...modules, response.data]);
        } catch (error) {
            console.error('Upload error:', error);
            alert('Module upload failed.');
        }
    };

    // Handle module deletion
    const handleDeleteModule = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/modules/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            alert('Module deleted successfully!');
            setModules(modules.filter(module => module.id !== id)); // Update state after deletion
        } catch (error) {
            console.error('Error deleting module:', error);
            alert('Failed to delete module.');
        }
    };

    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    return (
        <Container className="mt-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <h2 className="mb-4">Create Module</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Module Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter module title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Module Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter module description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Module Department</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter department name"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>Content</Form.Label>
                            <Editor
                                apiKey="tl1xjxw21xryk7hzkkvjy1uu7ceb34s37chqjdsj902bj7ks"
                                init={{
                                    plugins: [
                                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                                        'checklist', 'mediaembed', 'export', 'formatpainter', 'pageembed', 'a11ychecker',
                                    ],
                                    height: 300,
                                    menubar: true,
                                    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | removeformat',
                                }}
                                onEditorChange={handleEditorChange}
                            />
                        </Form.Group>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Upload Video</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="video/*"
                                        onChange={(e) => setVideo(e.target.files[0])}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Upload Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" onClick={handleUploadModule}>
                            Upload Module
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <Card className="shadow-sm">
                <Card.Body>
                    <h2 className="mb-4">Modules List</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Department</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modules.map((module, index) => (
                                <tr key={module._id}>
                                    <td>{index + 1}</td>
                                    <td>{module.title}</td>
                                    <td>{module.description}</td>
                                    <td>{module.department}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => handleDeleteModule(module._id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AddModules;
