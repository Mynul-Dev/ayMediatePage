import React from "react";
import Video from "./Video";
import { Col, Container, Row } from "react-bootstrap";
import WomenSvg from "../../../assets/Svgs/WomenSvg";
import Joinussvg from "../../../assets/Svgs/Joinussvg";

const HeroSection = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={4}>
          <div style={{ width: "fit-content" }}>
            <Video />
          </div>
        </Col>
        <Col lg={8}>
          <div>
            <div
              className="d-flex justify-content-between "
              style={{ width: 200 * 3 }}
            >
              <div>
                <h5 className="titleHero">Meditate with</h5>
                <h1 className="nameBharat">Dr. Bharat Thakur</h1>
                <p className="shortdescription">
                  A Journey of a lifetime with an <br /> Experienced guide
                </p>
              </div>
              <div>
                <WomenSvg />
              </div>
            </div>
<div className="mt-2">
<p className="sessionPlatform">Live sessions on Zoom</p>
            <div className="session">
              <h3>Every Sunday</h3>{" "}
              <span className="sessiontimes">(Monthly 4 sessions)</span>
            </div>
            <Row className="time ">
              <Col>
                <h5>INDIA 5:30 PM</h5>
              </Col>
              <Col>
                <h5>UK 12:00 NOON</h5>{" "}
              </Col>
              <Col>
                <h5>USA (EST) 7 AM</h5>{" "}
              </Col>
            </Row>
</div>
          </div>
          <div className="mt-2">
            <Row className="g-3">
              <Col>
                <div className="PriceSection">
                  <div className="px-2 titleprice">
                    <div className=" d-flex justify-content-between align-items-center">
                      <h1>1 month</h1>
                      <Joinussvg />
                    </div>
                  </div>
                  <div className="pricing">
                    <div>INR 4500 </div>
                    <div>AED 200 </div>
                    <div>EURO 50 </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="PriceSection">
                  <div className="px-2 titleprice">
                    <div className=" d-flex justify-content-between align-items-center">
                      <h1>3 month</h1>
                      <Joinussvg />
                    </div>
                  </div>
                  <div className="pricing">
                    <div>INR 10,800 </div>
                    <div>AED 480 </div>
                    <div>EURO 120</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
