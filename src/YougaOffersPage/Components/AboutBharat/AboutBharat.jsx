import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import AboutBharatImage from "../../../assets/BharatThakurRound.png";
import "./AboutBharat.css";
const AboutBharat = () => {
  return (
    <Container fluid className="about-bharat-container py-5">
      <Container>
        <Row>
          <Col lg={2} md={12} className="d-flex justify-content-center">
            <Image
              width={200}
              height={200}
              src={AboutBharatImage}
              alt="Bharat Thakur Image"
            />
          </Col>
          <Col lg={10} md={12}>
            <div>
              <div>
                <p className="about-bharat-text ">
                  About <span className="name ">Dr. Bharat Thakur</span>
                </p>
              </div>
              <div className="bharatThakurDescrip">
                <p>
                  Dr. Bharat Thakur is a remarkable polymath renowned for his
                  expertise in painting, meditation, yoga, and numerous other
                  disciplines. His multifaceted talents exemplify a holistic
                  approach to life, blending artistic expression with spiritual
                  practices for personal growth and enlightenment. His mastery
                  across various domains serves as an inspiration for those
                  seeking balance and fulfillment in both creativity and inner
                  peace.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutBharat;
