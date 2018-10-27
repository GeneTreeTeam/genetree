import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import NarbarFeatures from "./NarbarFeatures";
import { Route,Link } from 'react-router-dom'

import {firebaseApp} from "./firebase";
import FormsPage1 from "./Signup";


class FormsPage2 extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: '',
            password: '',
            error: {
                message:''
            }
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    Login(){
        console.log('this.state', this.state);
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
            .catch(error => {
                this.setState({error})
            })
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
                                <Input
                                    size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"
                                    onChange = {event => this.setState({email: event.target.value})}
                                />
                                <Input
                                    size="sm" label="Enter password" icon="lock" group type="password" validate error="wrong" success="right"
                                    onChange = {event => this.setState({password: event.target.value})}
                                />

                                <p className="font-small blue-text d-flex justify-content-end pb-3">
                                    <a href="/Forgotpassword.js" className="blue-text ml-1">Forgot Password?</a>
                                </p>


                                <div className="text-center mb-3">
                                        <Button color="btn btn-pink btn-block btn-rounded z-depth-1"
                                                rounded type="button" className="btn-block z-depth-1"
                                        onClick={() => this.Login()}
                                        >Log In</Button>
                                </div>
                                <div>{this.state.error.message}</div>
                            </ModalBody>

                            <ModalFooter className="mx-5 pt-3 mb-1">
                                <Col md="12">
                                    <p className="font-small grey-text d-flex justify-content-center">Don't have an account?
                                        <div><Link to={'/register'}>Sign Up</Link></div>
                                        </p>
                                </Col>
                            </ModalFooter>
                            <div><Link to={'/register'}>Sign Up</Link></div>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default FormsPage2;