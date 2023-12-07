import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/research.svg";
import selfPortrait from "../assets/img/self-portrait.jpeg";
export const Banner_Papers = () => {
    return (
        <section className="banner-papers" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={6}>
                        <img className='portrait-img' src={selfPortrait} alt={"Portrait Img"}/>
                        <h1>{`It's Getting Serious Now.`}</h1>
                        <p>I focus on researching financial topics such as asset pricing, statistical learning, and risk management. I've also researched
                            various deep learning processes such as NLP. <span className="blink">What's the overarching question? How can we apply AI to different aspects of our life
                                to make it Easier, Faster, and Better. </span> Here is a list of my publications/contributions below 💥.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="text-md-right text-center">
                        <img className='banner-img' src={headerImg} alt={"Header Img"}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}