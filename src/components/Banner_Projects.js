import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/presentation.png";
import selfPortrait from "../assets/img/self-portrait.jpeg";
export const Banner_Projects = () => {
    return (
        <section className="banner-projects" id="home">
            <Container>
                <Row className="justify-content-md-center text-left">
                    <Col xs={12} md={6} xl={7}>
                        <img className='portrait-img' src={selfPortrait} alt={"Portrait Img"}/>
                        <h1><span className="blink">Build</span>{` It.`}</h1>
                        <p>In that phase of trying to see what I'm trying to do with my life. I've been designing, researching, and executing my own
                            <span className="bold"> algotrading strategies</span>. Also, I'm looking into designing <span className="bold"> robotic machines</span> that can
                            complete human "redundant" tasks. So, we'll see where these go 👀.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="text-center">
                        <img className='banner-img' src={headerImg} alt={"Header Img"}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}