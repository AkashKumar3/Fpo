import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../css/rentEquipment.css'; // CSS file for custom styling

const RentEquipment = () => {
  // Sample equipment data (replace this with your actual data)
  const equipmentList = [
    {
      id: 1,
      name: 'Tractor',
      description: 'A powerful machine used in farming',
      imageUrl: 'https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Plow',
      description: 'Used for soil preparation',
      imageUrl: 'https://via.placeholder.com/150',
    },{
    id: 3,
    name: 'Plow',
    description: 'Used for soil preparation',
    imageUrl: 'https://via.placeholder.com/150',
  },{
  id: 4,
  name: 'Plow',
  description: 'Used for soil preparation',
  imageUrl: 'https://via.placeholder.com/150',
},
    // Add more equipment objects as needed
  ];

  return (
    <Container className="container mt-4">
      <Row className="stretch-green">
        <h3 className="w-100 ">Rent Farming Equipment</h3>
      </Row>
      <Row className="mt-4">
        {equipmentList.map((equipment) => (
          <Col key={equipment.id} md={4} className="mb-4">
            <Card className="custom-card d-flex h-100 flex-column">
              <div className="circle-image">
                <img
                  src={equipment.imageUrl}
                  alt={equipment.name}
                  className="rounded-circle img-fluid"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{equipment.name}</Card.Title>
                <Card.Text>{equipment.description}</Card.Text>
                <div className="mt-auto">
                  <Button variant="primary">Rent</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RentEquipment;
