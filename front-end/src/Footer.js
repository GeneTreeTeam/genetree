import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPagePro extends React.Component {
    render() {
        return (
            <Footer color="unique-color-dark" className="font-small pt-4 mt-4">
                <Container className="text-center text-md-left">
                    <Row className="text-center text-md-left mt-3 pb-3">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                GeneTree
                            </h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px" }}
                            />
                            <p>
                                We provide a Family Tree service.
                            </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px" }}
                            />
                            <p>
                                <a href="#!">GeneTree 1</a>
                            </p>
                            <p>
                                <a href="#!">GeneTree 2</a>
                            </p>
                            <p>
                                <a href="#!">GeneTree 3</a>
                            </p>
                            <p>
                                <a href="#!">GeneTree 4</a>
                            </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Useful links
                            </h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px" }}
                            />
                            <p>
                                <a href="#!">FAQs</a>
                            </p>
                            <p>
                                <a href="#!">Site Map</a>
                            </p>
                            <p>
                                <a href="#!">Terms and Conditions</a>
                            </p>
                            <p>
                                <a href="#!">Privacy Policy</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px" }}
                            />
                            <p>
                                <i className="fa fa-home mr-3" /> California, CA 95112, US
                            </p>
                            <p>
                                <i className="fa fa-envelope mr-3" /> contact@genetree.com
                            </p>
                            <p>
                                <i className="fa fa-phone mr-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <i className="fa fa-print mr-3" /> + 01 234 567 89
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col md="12" className="py-2">
                        <div className="mb-5 flex-center">
                            <a className="fb-ic">
                                <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                            <a className="li-ic">
                                <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                            <a className="pin-ic">
                                <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://www.GeneTree.com"> GeneTree.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPagePro;