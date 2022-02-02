import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import background from "../assets/bg-image.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div
          className="bg-hero"
          style={{
            backgroundImage: `url(${background})`,
          }}>
          <Container className="hero-container">
            <Row>
              <Col xl={6} md={6}>
                <div className="text-hero">
                  <h1>Get 2 FREE Stocks valued up to $1850</h1>
                  <div className="desc-hero">
                    <h6>
                      Open and fund a brokerage account with $100 or more and
                      you will have a chance of claiming stocks like GOOG, FB,
                      SBUX and more!
                    </h6>
                  </div>
                  <a href="https://www.webull.com/" className="btn hero-btn">
                    Claim your free stocks now
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Hero;
