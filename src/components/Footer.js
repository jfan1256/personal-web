import { Container, Row, Col } from "react-bootstrap";
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="divider"></div>
                <Row className="align-item-center">
                    <Col sm={6} className="text-center text-sm-start">
                        <p>Contacts: +1 540-818-7855 or jonathanfan1256@gmail.com</p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <p>© 2023 Jonathan Fan. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}