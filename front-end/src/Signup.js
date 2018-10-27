import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import NarbarFeatures from "./NarbarFeatures";
import FormsPage2 from "./Login";
import { Link } from 'react-router-dom';

import {firebaseApp} from "./firebase";


class FormsPage1 extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    SignUp(){
        console.log('this.state', this.state);
        const {email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
            .catch(error => {
                this.setState({error})
            })
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col md="0">
                        <Button color="info" onClick={this.toggle}>Sign Up <i className="fa fa-user-plus mr-1"></i></Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
                            <div className="modal-header primary-color white-text">
                                <h4 className="title">
                                    <Fa className="fa fa-pencil" /> Sign Up</h4>
                                <button type="button" className="close" onClick={this.toggle}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <ModalBody className="grey-text">
                                <Input size="sm" label="Your name" icon="user" group type="text"
                                       validate error="wrong" success="right"/>
                                <Input size="sm" label="Your email" icon="envelope" group type="email"
                                       validate error="wrong" success="right"
                                       onChange ={event => this.setState({email: event.target.value})}
                                />
                                <Input size="sm" label="Your password" icon="lock" group type="password"
                                       validate error="wrong" success="right"
                                />
                                <Input size="sm" label="Confirm your password" icon="exclamation-triangle"
                                       group type="password" validate error="wrong" success="right"
                                       onChange ={event => this.setState({password: event.target.value})}
                                />

                                <div className="form-check my-4">
                                    <input className="form-check-input" type="checkbox" id="defaultCheck12" />
                                    <label htmlFor="defaultCheck12" className="grey-text">Accept the
                                        <a href="#" className="blue-text"> Terms and Conditions</a></label>
                                </div>

                                <div className="text-center mb-3">
                                        <Button color="btn btn-pink btn-block btn-rounded z-depth-1"
                                                rounded type="button" className="btn-block z-depth-1"

                                                onClick={() =>
                                                    this.SignUp()                                                }
                                        >Sign Up</Button>
                                </div>
                                <div>{this.state.error.message}</div>
                            </ModalBody>

                            <ModalFooter className="mx-5 pt-3 mb-1">
                                <Col md="12">
                                    <p className="font-small grey-text d-flex justify-content-center">Have an account?
                                        <div><Link to={'/login'}>Login</Link></div>
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

export default FormsPage1;