import React, { Component } from "react";
import { Tab, Col, Nav, Row } from "react-bootstrap";
import requireAuth from "../../components/auth/requireAuth";
import Blog from "../Blog/BlogTab";
import FileUploader from "./Tabs/FileUploader";


class UserDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Add New Post</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Manage Posts</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">File Uploader</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Blog />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                         <Blog />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <FileUploader />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default requireAuth(UserDashboard);
