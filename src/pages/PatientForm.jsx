// src/pages/PatientForm.jsx
import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function PatientForm() {
  const [patient, setPatient] = useState({ name: '', age: '', gender: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setPatient(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questionnaire", { state: { patient } });
  };

  return (
    <Container className="py-4" style={{ maxWidth: 720 }}>
      <Card className="p-4">
        <h2 className="mb-3">Patient Details</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={patient.name} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control name="age" type="number" value={patient.age} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select name="gender" value={patient.gender} onChange={handleChange} required>
              <option value="">Select gender</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button type="submit" variant="primary">Save & Start</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
