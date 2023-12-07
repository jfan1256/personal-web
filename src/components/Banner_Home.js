import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/coding-svg-clipart.svg";
import selfPortrait from "../assets/img/self-portrait.jpeg";
export const Banner_Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Quant Researcher", "Weightlifter", "Video Editor"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 10)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <img className='portrait-img' src={selfPortrait} alt={"Portrait Img"}/>
                        <h1>{`Hi 🚨, I'm Jonathan Fan: `}<span className="wrap">{text}</span><span className="blink">|</span></h1>
                        <p>I'm an avid researcher 🎧💻🖱️ in asset pricing, financial machine learning, and risk management. Who knows? Maybe even a start-up. And, I love weightlifting 🏋️,
                            learning 📖, and video editing 📹.</p>
                        <p className="space">If you'd like, checkout the other pages on this site to see what I'm up too. A lot of it is just me blurbing about what I'm doing as a sanity check for myself. </p>
                        <p className="space">Here is my&nbsp;
                        <a href={`${process.env.PUBLIC_URL}/resume_jofan.pdf`} className='link' target="_blank" rel="noopener noreferrer">
                            resume
                        </a>
                            &nbsp;📡
                        </p>
                        <p className="space">Let's connect <a href="mailto:jonathanfan1256@gmail.com?subject=Meeting&body=Hey Jonathan!" className="email-link"><ArrowRightCircle size={15}/></a></p>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="text-center text-md-right">
                        <img className='banner-img' src={headerImg} alt={"Header Img"}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}