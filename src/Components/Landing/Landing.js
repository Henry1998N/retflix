import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./Landing.css";
export default function Landing({ users }) {
  return (
    <div className="users-container">
      <div className="user-header">
        <h1>Who's Watching ? </h1>
      </div>
      <Row>
        {users.map((user) => (
          <Col>
            <Card
              bg={"dark"}
              key={"Dark"}
              text={"light"}
              style={{ width: "300px", height: "250px" }}
              className="mb-1"
            >
              <Link to="/catalog">
                <Card.Img
                  width="100%"
                  height="250px"
                  variant="top"
                  src={user.img}
                />
              </Link>
              <Card.Header className="user-name">
                <b>{user.name}</b>
              </Card.Header>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
