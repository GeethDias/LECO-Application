import React from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from '../../Components/Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <div>
      <Container className="mt-4">
        <h2>Admin Dashboard</h2>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Add and Delete Questions</Card.Title>
                <Card.Text>
                  Add and Delete questions for different policy modules.
                </Card.Text>
                <Link to="/admin/AddQuestions" className="btn btn-primary">Go to Add Questions</Link>
              </Card.Body>
            </Card>
          </Col>
          

          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Manage Users</Card.Title>
                <Card.Text>
                  View and manage the user accounts in the system.
                </Card.Text>
                <Link to="/admin/manage-users" className="btn btn-primary">Manage Users</Link>
              </Card.Body>
            </Card>
          </Col>


          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Add Modules</Card.Title>
                <Card.Text>
                  Add new modules to the system.
                </Card.Text>
                <Link to="/admin/add-modules" className="btn btn-primary">Add Modules</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Update Policy</Card.Title>
                <Card.Text>
                  Update the Acceptable Use Policy.
                </Card.Text>
                <Link
                  to={{
                    pathname: "/AcceptableUsePolicy",
                    state: { isEditing: true },
                  }}
                  className="btn btn-primary"
                >
                  Update Policy
                </Link>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;