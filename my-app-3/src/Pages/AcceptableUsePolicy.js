import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000';

const AcceptableUsePolicy = () => {
  const location = useLocation();
  const [policyContent, setPolicyContent] = useState('');
  const [isEditing, setIsEditing] = useState(location.state?.isEditing ?? false);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user has an admin role
    const role = localStorage.getItem('role');
    setIsAdmin(role === 'AdminUser');

    // Set editing state from location state
    if (location.state?.isEditing && role === 'AdminUser') {
      setIsEditing(location.state.isEditing);
    }
  }, [location]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found, user might not be authenticated.');
      setLoading(false);
    }

    axios.get(`${API_BASE_URL}/api/policy`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setPolicyContent(response.data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching policy:', err);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `${API_BASE_URL}/api/policy`,
        { content: policyContent },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert('Policy updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating policy:', error);
      alert('Failed to update policy. Please try again.');
    }
  };

  if (loading) {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4">
              <h1 className="text-center mb-4">Loading...</h1>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4">
            {isAdmin && isEditing ? (
              <div>
                <Editor
                  apiKey="tl1xjxw21xryk7hzkkvjy1uu7ceb34s37chqjdsj902bj7ks"
                  value={policyContent}
                  init={{
                    height: 500,
                    menubar: true,
                    plugins: 'link lists',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',
                  }}
                  onEditorChange={(content) => setPolicyContent(content)}
                />
                <div className="mt-3">
                  <button className="btn btn-primary me-2" onClick={handleSave}>Save Policy</button>
                  <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <div dangerouslySetInnerHTML={{ __html: policyContent }} />
                {isAdmin && <button className="btn btn-primary mt-3" onClick={() => setIsEditing(true)}>Edit Policy</button>}
              </div>
            )}
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default AcceptableUsePolicy;
