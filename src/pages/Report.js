// src/pages/Report.js
import React, { useRef } from "react";
import { Container, Card, Table, Button, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { questions, ratingOptions, scoringRules } from "../data/questions";

export default function Report() {
  const location = useLocation();
  const navigate = useNavigate();

  const stored = sessionStorage.getItem("phq9Report");
  const fallback = stored ? JSON.parse(stored) : {};
  const { patient, answers } = location.state || fallback;

  const reportRef = useRef();
  const today = new Date().toLocaleDateString();

  // Calculate total score
  const totalScore = questions.reduce((sum, q) => {
    const val = answers?.[q.id];
    return typeof val === "number" ? sum + val : sum;
  }, 0);

  // Get severity label
  const getSeverity = (score) => {
    for (const rule of scoringRules.severity) {
      if (score >= rule.range[0] && score <= rule.range[1]) return rule.label;
    }
    return "No depression";
  };

  const severityLabel = getSeverity(totalScore);

  // PDF download
  const downloadPDF = () => {
    html2canvas(reportRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`PHQ9_Report_${patient?.name || "Patient"}.pdf`);
    });
  };

  const goHome = () => navigate("/");

  if (!patient || !answers) {
    return (
      <Container className="py-4">
        <h4>No report found. Please complete the questionnaire first.</h4>
        <Button onClick={goHome}>Go to Home</Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="text-center mb-4 no-print">
        <Button variant="primary" className="me-3" onClick={downloadPDF}>
          Download PDF
        </Button>
        <Button variant="secondary" onClick={goHome}>
          Go to Home
        </Button>
      </div>

      <div ref={reportRef} className="report-print">
        <div className="text-center mb-3">
          <h1 className="mb-1">PHQ-9 Depression Assessment Report</h1>
          <small className="small-muted">
            PHQ-9 is presented as an aid to healthcare professionals only and is not a substitute for clinical judgment.
          </small>
        </div>

        {/* Patient Details */}
        <Card className="mb-4">
          <Card.Body>
            <Row className="mb-2 patient-row">
              <Col md={4} className="pair"><strong>Name:</strong> {patient?.name}</Col>
              <Col md={4} className="pair"><strong>Age:</strong> {patient?.age}</Col>
              <Col md={4} className="pair"><strong>Gender:</strong> {patient?.gender}</Col>
            </Row>
            <Row>
              <Col md={6}><strong>Date of Assessment:</strong> {today}</Col>
              <Col md={6}><strong>Interviewed by:</strong> Dr. Manish Thakre</Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Questions Table */}
        <h4 className="mb-3">Patient Responses</h4>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Question</th>
              {ratingOptions.map((opt) => (
                <th key={opt.value}>{opt.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {questions.map((q) => (
              <tr key={q.id}>
                <td>{q.text}</td>
                {ratingOptions.map((opt) => (
                  <td key={opt.value} className="text-center">
                    {answers[q.id] === opt.value ? "✔️" : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Total Score + Severity */}
        <Card className="mt-4">
          <Card.Body>
            <h4>Total Score: {totalScore}</h4>
            <h5>Depression Severity: {severityLabel}</h5>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
