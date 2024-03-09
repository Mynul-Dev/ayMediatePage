import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PreFooter.css";
const PreFooter = () => {
  return (
    <Container fluid className="pre-footer-container py-5">
      <Container>
        <div>
          <p className="title">
            To find out more about the <span className="highlight">MEDITATE WITH BHARAT THAKUR</span>{" "}
            weekly sessions, call or What’s App
          </p>
        </div>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <p className="ColTitle">For all countries:</p>
            <h3 className="ColData">+971-568819394</h3>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <p className="ColTitle">For India:</p>
            <h3 className="ColData">+91 6352272446</h3>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <p className="ColTitle"> For UK:</p>
            <h3 className="ColData">+44 7858 104762</h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PreFooter;
