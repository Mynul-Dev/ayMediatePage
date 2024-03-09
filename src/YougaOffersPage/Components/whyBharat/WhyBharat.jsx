import React from "react";
import BharatThakurSqureIcon from "../../../assets/Svgs/BharatThakurSqure";
import { Col, Row, Container } from "react-bootstrap";
import "./WhyBharat.css";
const WhyBharat = () => {
  return (
    <Container fluid className="why-bharat-container">
      <Container>
        <Row>
          <Col lg={7} md={12} sm={12} className="Col1-container">
            <div>
              <div>
                <p className="why-bharat-text">WHY BHARAT THAKUR?</p>
              </div>
              <div className="WhyBharatDescription">
                <p>
                  The world and all its citizens are in a crisis today. We have
                  tremendously specialized and brilliant people in all walks of
                  life. But it’s evident that they don’t hold the answers on how
                  to live. They know economics, they know technology, and they
                  know the art of communication. But despite all this, the
                  majority of people suffer from depression, loneliness,
                  dissatisfaction and existential dread. We have doctors to take
                  care of our body when it is sick, but who will guide us when
                  our life is imbalanced? This is a real problem and probably
                  the most relevant in today’s changing world. <br />
                  Every human being has a personal life, a professional life, an emotional
                  life, a creative life, a physical life and a spiritual life.
                  Dr. Bharat Thakur’s ability to balance these six aspects of
                  his own life perfectly serves as a practical guide to all his
                  students and people from all walks of life on exactly how to
                  achieve this. The answer lines in simple but powerful
                  meditation processes.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={5} md={12} sm={12}>
            <BharatThakurSqureIcon />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WhyBharat;
