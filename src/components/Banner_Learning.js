import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import selfPortrait from "../assets/img/self-portrait.jpeg";
export const Banner_Learning = () => {
    return (
        <section className="banner-learning" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={6}>
                        <img className='portrait-img' src={selfPortrait} alt={"Portrait Img"}/>
                        <h1>{`Learn, `}<span className="blink">Learn</span>{`, Learn.`}</h1>
                        <p>Who doesn't love learning? Given I am pursuing a degree in Economics, Mathematics, Statistics
                            and Data Science, I would say a majority of my focus are in these fields. <span className="bold"> My main goal is to convert research into
                            industry as fast as possible.</span> Check out the latest topics that I am focusing on and reading about below ⬇️.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="text-center">
                        <img className='banner-img' src={headerImg} alt={"Header Img"}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}