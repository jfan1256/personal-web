import { Container, Row, Col } from "react-bootstrap";
import ml_strat from "../assets/img/ml_strat.png";
import ims_strat from "../assets/img/ims_start.png";

export const Content_Projects = () => {
    return (
        <section className="content-projects" id="home">
            <Container>
                <div className="divider"></div>
                <Row>
                    <Col xs={12} className="text-center">
                        <h1>AlgoFacto Hedge Fund 📈</h1>
                        <p className="subtitle">(Can't think of a name right now)</p>
                        <hr className="title-underline" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={5} className="add-space-paragraph left-column add-right">
                        <p className="bold">
                            Okay, hear me out...
                        </p>
                        <p>
                            My vision is to utilize these 4 years of undergrad to design a portfolio of 15-20 robust, profitable strategies. These strategies will then
                            be traded via paper-trading for about 6-12 months to ensure confidence when seeking out independent and institutional investors. After raising
                            enough capital, this strategically allocated portfolio of strategies will serve as the foundational pillars for the start of my Pure
                            Quantitative Hedge Fund. The goal of this hedge fund is to design purely automated, systematic trading strategies, rooted in data-driven research,
                            while also adhering to standard behavioral and baseline financial theories.
                        </p>
                        <p>
                            Yes, this is really f*cking hard, but I believe with the right mindset, right team, and right amount of knowledge, this vision is very possible. So
                            if you've gotten this far and are interested, feel free to reach out to me!
                        </p>
                        <p className="add-space-paragraph bold">
                            Here is where I'm at with all of this so far.
                        </p>
                        <p>
                            Over the past 6 months, I have been working on designing a coherent system (using Python) that allows me (and any future researcher willing to join)
                            to design strategies, backtest & stresstest these strategies, and deploy such strategies live via paper-trading or live-trading with executed orders. While
                            designing this "package" per say, I have also researched, designed, and implemented my own strategies.
                        </p>
                        <p>For example, I have created and replicated
                            over 500+ factors (read 50+ academic papers), experimented with models ranging from Linear Regression to Gradient-Boosted Trees to LSTM, and
                            compiled datasets from WRDS to FMP to IBKR live-data.
                        </p>
                        <p>
                            Currently, I have 6 deployable strategies that I am highly confident will perform well in a paper-trading environment.
                            These strategies range from standard Trend-Following Strategies to using a Gradient-Boosted ML Model (lightgbm)
                            to predict a given stock's return for the next day. The backtested portfolio presents promising metrics: ~3.0 Sharpe, ~30% CAGR, ~0.0% Risk of Ruin, ~1.05% daily VAR, etc.
                        </p>
                        <p>
                            If you would like to read more, feel free to read my company proposal down below. It is by no means complete, so take it with a grain of salt.
                            I have all the code for all this, but for proprietary reasons, I will not share them here unless you contact me.
                        </p>
                        <a href={`${process.env.PUBLIC_URL}/hedge_fund_plan.pdf`} target="_blank" rel="noopener noreferrer" className='link'>View Company Proposal</a>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="add-space text-center">
                        <h5 className="text-center">ML Strategy Performance</h5>
                        <img src={ml_strat} alt=""/>
                        <h5 className="text-center add-space-paragraph">IMS Strategy Performance</h5>
                        <img src={ims_strat} alt=""/>
                    </Col>
                </Row>
                <Row className="add-space-row">
                    <Col xs={12} className="text-center">
                        <h1>Breeze 🤖</h1>
                        <p className="subtitle">(Also can't think of a name right now)</p>
                        <hr className="title-underline" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={6} className="add-space-paragraph left-column">
                        <p className="bold">
                            I can't really leak too much information on this so I'll keep it short...
                        </p>
                        <p>
                            I am currently working with a couple of friends to manufacture a robotic machine. What will this machine do? All I am going to say
                            is this: Our mission is to design machines that are suitable for completing human "redundant" tasks.
                        </p>
                        <p>
                            This start-up is extremely interesting and a new-space that I am just learning about. But I believe that if
                            we succeed in our mission, this company will revolutionize the way we live. You'd be surprised on how untapped this business area is.
                            All the craze right now is AI, AI, AI!!! But what about bettering our daily lives physically? That's what we - here at Breeze - are looking to answer.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}