import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Row } from "react-bootstrap";



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 700 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="divider"></div>
            <Row>
                <Col>
                    <div>
                        <h2>
                            Skills
                        </h2>
                        <p>
                            Here's a snapshot 📸 of all the skills I currently possess and working on ✍️.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <div className="progress-bar-container">
                                    <div className="progress-bar python" data-progress="99"></div>
                                    <h5>Python</h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="progress-bar-container">
                                    <div className="progress-bar pandas" data-progress="99"></div>
                                    <h5>Pandas</h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="progress-bar-container">
                                    <div className="progress-bar react" data-progress="72"></div>
                                    <h5>React</h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="progress-bar-container">
                                    <div className="progress-bar htmlcss" data-progress="94"></div>
                                    <h5>HTML/CSS</h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="progress-bar-container">
                                    <div className="progress-bar stats" data-progress="87"></div>
                                    <h5>Statistical Learning</h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="progress-bar-container">
                                    <div className="progress-bar dl" data-progress="77"></div>
                                    <h5>Deep Learning</h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="progress-bar-container">
                                    <div className="progress-bar ae" data-progress="91"></div>
                                    <h5>Adobe After Effects</h5>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </section>
    )
}