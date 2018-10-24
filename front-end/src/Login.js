import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {NavbarNav} from "./NarbarFeatures";
import FormsPage1 from "./Signup";
import FormsPage3 from "./Forgotpassword";

class FormsPage2 extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col md="0">
                        <Button color="info" onClick={this.toggle}>Log In<i className="fa fa-sign-in ml-1"></i> </Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
                            <div className="modal-header primary-color white-text">
                                <h4 className="title">
                                    <Fa className="fa fa-paper-plane-o " /> Log In </h4>
                                <button type="button" className="close" onClick={this.toggle}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <ModalBody className="grey-text">
                                <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                <Input size="sm" label="Enter password" icon="lock" group type="password" validate error="wrong" success="right"/>

                                <p className="font-small blue-text d-flex justify-content-end pb-3">
                                    <a href="/Forgotpassword.js" className="blue-text ml-1">Forgot Password?</a>
                                </p>


                                <div className="text-center mb-3">
                                        <Button color="btn btn-pink btn-block btn-rounded z-depth-1"
                                                rounded type="button" className="btn-block z-depth-1">Log In</Button>
                                </div>
                            </ModalBody>

                            <ModalFooter className="mx-5 pt-3 mb-1">
                                <Col md="12">
                                    <p className="font-small grey-text d-flex justify-content-center">Don't have an account?
                                        <a href="./Signup.js" data-toggle="modal" data-target="modalSignup" data-dismiss="modal"
                                           className="blue-text ml-1 font-weight-bold"> Sign Up</a></p>
                                </Col>
                            </ModalFooter>

                        </Modal>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default FormsPage2;