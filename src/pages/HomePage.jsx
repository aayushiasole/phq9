import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../custom.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

export default function HomePage() {
  const navigate = useNavigate();
  const [showBenefits, setShowBenefits] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,  // animation speed (ms)
      once: true,     // animate only once per element
      offset: 120,    // trigger point from top of viewport
      easing: "ease-in-out"
    });
  }, []);

  const domains = [
    { title: "Affective/Cognitive Domain", info: "Includes psychological symptoms such as low mood, loss of interest, feelings of worthlessness, difficulty concentrating, and suicidal ideation." },
    { title: "Somatic Domain", info: "Includes physical symptoms such as sleep disturbance, fatigue, appetite or weight changes, and psychomotor changes." },
    { title: "Functional Impairment", info: "Non-scored question on how symptoms affect daily functioning, work, chores, and relationships." }
  ];

  return (
    <div>
      {/* HERO */}
      <Container fluid className="py-5 d-flex justify-content-center" data-aos="fade-up">
        <div className="section-box text-center" style={{maxWidth: 1000}}>
          <h1>Welcome to the PHQ-9 App: Your Partner in Mental Health Screening</h1>
          <h4 className="mb-3">Helping You Track and Understand Your Well-Being.</h4>
        </div>
      </Container>

      {/* ===== Info Section: PHQ-9 Intro + Scoring + History ===== */}
      <section className="container my-5">
        <div className="row g-4 align-items-stretch">
          {/* LEFT COLUMN: What is PHQ-9 + Scoring Threshold in one card */}
          <div className="col-lg-6">
            <div className="section-box h-100 d-flex flex-column">
              <h2 className="mb-3">What is PHQ-9?</h2>
              <p className="lead">
                The Patient Health Questionnaire-9 (PHQ-9) is a widely used, evidence-based screening tool designed to help assess the presence and severity of depression.
                It consists of 9 simple questions that reflect common symptoms of depression, such as low mood, loss of interest, sleep changes, and fatigue.
              </p>
              <p className="lead">
                The PHQ-9 can be self-administered or completed with the support of a healthcare professional. Because it is short, reliable, and easy to score, it is frequently used in both clinical and community settings to support early detection, track progress over time, and guide treatment planning.
              </p>
              <p className="lead">
                This app provides a quick and private way to complete the PHQ-9 questionnaire. All assessments are self-contained—no login required and no data stored. At the end, you’ll receive an interpretation of your score to better understand your mental health status.
              </p>

              <hr className="my-4"/>

              <h3 className="mb-3">Scoring Threshold</h3>
              <p className="lead">
                PHQ-9 scores are calculated by adding the responses to all 9 questions. Each question is scored 0–3:
              </p>
              <ul className="small-muted">
                <li>Not at all = 0</li>
                <li>Several days = 1</li>
                <li>More than half the days = 2</li>
                <li>Nearly every day = 3</li>
              </ul>

              <p className="lead">Total Score (0–27) indicates depression severity:</p>

              <div className="table-responsive">
                <table className="score-table mx-auto mt-3 mb-0">
                  <thead>
                    <tr>
                      <th>Total Score</th>
                      <th>Depression Severity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1–4</td><td>Minimal depression</td></tr>
                    <tr><td>5–9</td><td>Mild depression</td></tr>
                    <tr><td>10–14</td><td>Moderate depression</td></tr>
                    <tr><td>15–19</td><td>Moderately severe depression</td></tr>
                    <tr><td>20–27</td><td>Severe depression</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: History of PHQ-9 with Vertical Timeline */}
          <div className="col-lg-6">
            <div className="section-box h-100">
              <h2 className="mb-4 text-center">History of PHQ-9</h2>
              <div className="roadmap-vertical">
                {[
                  {
                    year: "1990s Origins",
                    text: "In the mid-1990s, a team of researchers at Columbia University recognized that busy primary care clinicians needed a faster, more systematic method for detecting and diagnosing common mental health issues. Led by Dr. Robert L. Spitzer, Dr. Janet B.W. Williams, and Dr. Kurt Kroenke, the team, which also collaborated with the Regenstrief Institute at Indiana University, set out to develop the Primary Care Evaluation of Mental Disorders (PRIME-MD)."
                  },
                  {
                    year: "1999–2001 Development",
                    text: "Between 1999 and 2001, the PHQ-9 was officially developed and validated as a shorter, more efficient, and self-administered version of the depression module found in the original PRIME-MD. The researchers, led by Spitzer and Kroenke, designed the PHQ-9 to directly map onto the nine diagnostic criteria for major depressive episodes from the DSM-IV, ensuring its clinical relevance. This design allowed the PHQ-9 to serve a dual purpose: not only as a screening tool to indicate the probable presence of a depressive disorder but also as a severity measure through its scoring system. "
                  },
                  {
                    year: "2000s Widespread Adoption",
                    text: "Following the publication of its validation study in 2001, the PHQ-9's adoption rapidly gained momentum throughout the 2000s. Its user-friendly nature—being brief, simple to score, and available at no cost—made it particularly attractive for busy healthcare environments. Its alignment with the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV) criteria solidified its credibility among medical professionals."
                  },
                  {
                    year: "2010s Global Recognition",
                    text: "Initially, the PHQ-9 was intended primarily for primary care settings, but its utility and ease of use led to its rapid expansion into a wide array of other clinical environments throughout the 2000s. This expansion demonstrated its adaptability beyond general screening and its value in more specialized areas of healthcare.Psychiatric clinics: Psychiatric hospitals and outpatient clinics began to use the PHQ-9 for monitoring the severity of depressive symptoms and evaluating treatment response over time. While it continued to serve as a screening tool, studies in these settings found it to be a reliable measure for assessing the progress of diagnosed patients."
                  },
                  {
                    year: "2020s Digital Integration",
                    text: "Throughout the 2020s, the PHQ-9 has been integrated into digital health initiatives through telemedicine and digital phenotyping. This integration allows for remote assessment via digital platforms and apps, enhancing monitoring and streamlining clinical workflows. Digital phenotyping leverages embedding the PHQ-9 in mobile apps to correlate self-reported symptoms with passively collected data from smartphone sensors, enabling machine learning applications for predicting depression severity and suicidal ideation. More information on this topic is available from the cited sources."
                  }
                ].map((step, idx) => (
                  <div className="roadmap-item" key={idx} data-aos="fade-up" data-aos-delay={idx*100}>
                    <div className="roadmap-node"></div>
                    <div className="roadmap-content">
                      <h5>{step.year}</h5>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <Container className="py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">What Does PHQ-9 Help Detect? Key Domains</h2>
        <Row className="g-4">
          {domains.map((d,i) => (
            <Col md={4} key={i} data-aos="fade-up" data-aos-delay={i*80}>
              <Card className="domain-card p-3">
                <Card.Body>
                  <Card.Title style={{color:"var(--lavender-500)"}}>{d.title}</Card.Title>
                  <Card.Text style={{color:"var(--muted)"}}>{d.info}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Key Features & Impact */}
      <Container className="py-5" data-aos="fade-up">
        <Row className="g-4">
          <Col md={6}>
            <div className="section-box h-100">
              <h2 className="text-center mb-4">Clinical Impact</h2>
              <h5>For Diagnosis and Screening</h5>
              <ul className="small-muted">
                <li>Early detection in primary care: positive screen (≥10) prompts further evaluation.</li>
                <li>Aligns with DSM-5 criteria: allows provisional diagnosis of major depressive episodes.</li>
                <li>Efficient and low-burden: brief, self-report questionnaire suitable for busy settings.</li>
              </ul>

              <h5>For Severity Measurement & Monitoring</h5>
              <ul className="small-muted">
                <li>Quantifies depression severity: provides objective measure of patient condition.</li>
                <li>Tracks treatment response: repeatable over time to monitor progress.</li>
                <li>Guides treatment planning: higher scores indicate need for more intensive interventions.</li>
              </ul>

              <h5>For Risk Assessment</h5>
              <ul className="small-muted">
                <li>Suicidal ideation screening: identifies red flags for immediate professional attention.</li>
              </ul>

              <h5>For Population Health & Research</h5>
              <ul className="small-muted">
                <li>Standardized outcomes: enables research, quality improvement, and mental health surveillance.</li>
                <li>Cross-cultural adaptability: validated in multiple languages for diverse populations.</li>
              </ul>
            </div>
          </Col>

          <Col md={6}>
            <div className="section-box h-100">
               <h2 className="text-center mb-4">Feasibility and Accessibility</h2>
              <ul className="small-muted">
                <li>Time-efficient: The brevity of the PHQ-9, consisting of just nine items, means it can be completed by patients in a few minutes, placing minimal burden on both patients and busy clinic schedules.</li>
                <li>Minimal training: The PHQ-9 is designed for easy scoring and interpretation, meaning it can be administered by a wide range of healthcare professionals, not just psychiatrists.</li>
                <li>Versatile administration: It can be completed by patients on their own, over the phone with a clinician, or in a tablet-based app, adding to its flexibility and ease ofof use in various settings.</li>
                <li>Reduces health disparities: As a freely available, public domain instrument, its use is not restricted by cost. The availability of validated translations in dozens of languages makes it a powerful tool for screening in resource-limited settings and among diverse cultural groups.</li>
                <li>Acceptability: Multiple studies, including one focusing on people with multiple sclerosis, have found the PHQ-9 to be highly acceptable to patients. </li>
              </ul>

              <h2 className="text-center mb-4">Research Applications</h2>
              <ul className="small-muted">
                <li>Standardized outcomes measurement: essential for depression research and monitoring.</li>
                <li>Robust psychometric properties: high reliability and validity.</li>
                <li>Adaptable across populations: adolescents, adults with chronic conditions, and cross-cultural studies.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* CTA */}
      <Container className="py-5" data-aos="zoom-in">
        <div className="section-box text-center">
          <h3 style={{color:"var(--lavender-500)"}}>Ready to Begin Your Assessment?</h3>
          <p className="small-muted">
            The assessment typically takes about 15–20 minutes (primary care version). Your responses remain private in this session.
          </p>
          <Button style={{ background: "var(--lavender-500)", border: "none" }} size="lg"
            onClick={() => navigate("/patient")}>Start Your Assessment</Button>
        </div>
      </Container>

      <footer style={{ background: "var(--lavender-300)", padding: 18, marginTop: 24, color: "#fff", textAlign: "center" }}>
        © {new Date().getFullYear()} PHQ-9 — A validated tool for depression screening and monitoring.
      </footer>
    </div>
  );
}