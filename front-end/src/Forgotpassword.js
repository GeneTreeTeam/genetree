import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class FormsPage3 extends React.Component  {

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

                        <p className="font-small blue-text d-flex justify-content-end pb-3">
                            <a className="blue-text ml-1" onClick={this.toggle}>Forgot Password?</a></p>

                        <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
                            <div className="modal-header primary-color white-text">
                                <h4 className="title">
                                    <Fa className="fa-edit " />Forgot Password</h4>
                                <button type="button" className="close" onClick={this.toggle}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <div className="card-body">
                                <form>
                                    Enter your email and we will send you a link to reset password
                                    <br />
                                    <br />
                                    <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">Your Email</label>
                                    <input type="text" id="defaultFormCardNameEx" className="form-control"  />
                                    <br />
                                    <br />
                                    <div className="text-center mb-3">
                                        <Button color=" btn-pink" type="submit">Reset Password</Button>
                                    </div>
                                </form>
                            </div>

                        </Modal>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default FormsPage3;