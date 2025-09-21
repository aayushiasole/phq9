// src/pages/Questionnaire.jsx
import React, { useState } from 'react';
import { Container, Card, Form, Button, ProgressBar } from 'react-bootstrap';
import { questions, ratingOptions } from '../data/questions';   
import { useNavigate, useLocation } from "react-router-dom";

export default function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [page, setPage] = useState(0);
  const navigate = useNavigate();  
  const { state } = useLocation();
  const patient = state?.patient;

  const questionsPerPage = 4;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const startIndex = page * questionsPerPage;
  const pageQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };
    
  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    } else {
      // save for session persistence
      sessionStorage.setItem("gmhatReport", JSON.stringify({ answers, patient }));
      navigate("/report", { state: { answers, patient } });
    }
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;

  return (
    <Container className="py-4">
      <h2 className="mb-3">Questionnaire</h2>
      <p className="small-muted mb-3">Answer honestly — answering these questions can ease the process of assessing you!</p>

      <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4" />

      {pageQuestions.map(q => (
        <Card key={q.id} className="mb-3 question-card">
          <Card.Body>
            <Card.Title className="mb-3">{q.text}</Card.Title>
            <Form>
              {ratingOptions.map(opt => (
                <div key={opt.value} className="rating-pill form-check form-check-inline">
                  <Form.Check
                    type="radio"
                    id={`q-${q.id}-${opt.value}`}
                    name={`q-${q.id}`}
                    label={opt.label}
                    value={opt.value}
                    checked={answers[q.id] === opt.value}
                    onChange={() => handleAnswer(q.id, opt.value)}
                  />
                </div>
              ))}
            </Form>
          </Card.Body>
        </Card>
      ))}

      <div className="d-flex justify-content-end">
        <Button onClick={handleNext} variant="primary">
          {page === totalPages - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </Container>
  );
}
