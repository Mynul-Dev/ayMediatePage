import React from "react";
import YougaSimpleImage from "../../../assets/Svgs/YougaSimple";
import { Col, Container, Row } from "react-bootstrap";
import "./MeditationMadeSimple.css";
const MeditationMadeSimple = () => {
  return (
    <Container className="py-5">
      <div className="Title">
        <p className="Title1">Meditation made simple </p>
        <p className="Title2">by giving experience of</p>
      </div>
      <Row>
        <Col lg={12} sm={12} >
          <div className="img-fluid">
                      <YougaSimpleImage />

          </div>
        </Col>
      </Row>
      <div className="MeditationMadeSimpleDescription">
        When you think of Meditation as a practice it looks daunting. You have
        to overcome your thoughts or you have to sit for long hours in silence.
        It evokes a feeling of being overwhelmed with a difficult project. So
        often enough we don’t even begin. Meditation however, can be as simple
        as being aware of your breath for a few minutes, or just focusing on the
        leaves of a tree and feeling the freshness of the breeze, or even just
        cooking a dish with great awareness. Meditation is not separate from
        life. In fact all the practices that we learn are meant to be integrated
        into our lives. Making our lives more wholesome and enriched.  The roots
        of all disease lie deep in our subconscious mind. If we are to live a
        free and joyful life, we must remove these granthis. Under the guidance
        of a Master we are able to go into an Alpha brainwave  state where the
        clearing of subconscious  blocks can happen. A consistent and dedicated
        practice of just one hour a week can lead to freedom and expansion. It
        is at the most profound level the evolution of our Spirit.
      </div>
    </Container>
  );
};

export default MeditationMadeSimple;
