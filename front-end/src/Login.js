import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import NarbarFeatures from "./NarbarFeatures";
import { Route,Link } from 'react-router-dom'

import {firebaseApp} from "./firebase";
import FormsPage1 from "./Signup";
import {NavbarToggler} from "./NavBar";

import {  NavLink
     } from 'mdbreact';
import FormsPage3 from "./Forgotpassword";



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

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
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
                        <Modal isOpen={this.state.modal} className="cascading-modal">
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

                                <div className="text-center mb-3">
                                        <Button color="btn btn-pink btn-block btn-rounded z-depth-1"
                                                rounded type="button" className="btn-block z-depth-1"
                                        onClick={() => this.Login()}
                                            >Log In</Button>
                                    {this.state.error.message}
                                </div>

                            </ModalBody>

                            <ModalFooter  className="mx-5 pt-3 mb-1">
                                <Col md="12">
                                    <p className="font-small grey-text d-flex justify-content-center">Don't have an account?
                                        </p>
                                    <p className="font-small grey-text d-flex justify-content-center">
                                        <div > <FormsPage3/></div>
                                    </p>
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