import { Container, Row, Col } from "react-bootstrap";
import stat from "../assets/img/stat.jpg";
import stock from "../assets/img/stock.jpg";
import hawaii from "../assets/img/hawaii.jpg";
import nlp from "../assets/img/nlp.jpg";

export const Content_Learning = () => {
    return (
        <section className="content-learning" id="home">
            <Container>
                <div className="divider"></div>
                <h4>{`2023`}</h4>
                <Row className="add-space-paragraph">
                    <Col xs={12} md={5} xl={2}>
                        <h5>The Elements of Statistical Learning</h5>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="left-column custom-spacing">
                        <p>
                            I am currently reading this amazing book and I highly recommend anyone who is interested in learning more about the math behind
                            Machine Learning to read this book. The book covers the foundations of machine learning processes, starting from Linear Regression
                            to Kernel-Based Methods to Gradient-Boosted Trees to Neural Networks (and all the other models and testing methods along the way).
                            I have learned a ton of new information with regards to performing valid statistical tests and the mathematical proofs behind why they work.
                            In turn, this knowledge has helped me significantly in devising my own experiements in Quant Research, NLP, and much more.
                        </p>
                        <p className="bold">
                            Warning: This book is very challenging to read 🤯
                        </p>
                        <p>
                            I remember reading the first introduction chapter and reacting like "WTF IS THIS???" Once you get through the first couple of chapters, the
                            reading becomes more smooth. If you do start reading this book, I recommend you fully digest the information in the first couple of chapters
                            as the book progressively builds upon that foundation. Happy reading!
                        </p>
                    </Col>
                    <Col xs={12} md={12} xl={3} className="image-center">
                        <img src={stat} alt=""/>
                    </Col>
                </Row>
                <Row className="add-space">
                    <Col xs={12} md={5} xl={2}>
                        <h5>Asset Pricing, Devising Strategies, Trading, and Risk Management</h5>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="left-column custom-spacing">
                        <p>
                            You can read more about this in my project tab, but I have been learning for the past 6 months on how to create successful automated
                            trading strategies. Mostly just been reading a ton books to gain the knowledge to be able to devise trading strategies. And reading
                            academic papers, while replicating them in code to see where I can implement improvements to gain better results.
                            Over this period, I have developed a passion toward this type of research. In my opinion, quant research is a unique
                            academic area where a researcher can examine a new idea and implement it into industry problems instantly (relatively speaking) 👏.
                        </p>
                        <p className="bold">
                            What does this look like in real life?
                        </p>
                        <p>
                            Imagine a quant researcher has the capabilities to research and design successful historical strategies and to implement these strategies live.
                            Then, whenever this research discovers a new profitable strategy, he can instantly test his hypothesis in a live environment (whether that be
                            self-trading or at a hedge fund). Boom! Just like that. Instant. Currently, I am trying to develop these skills so that one day I can instantly implement
                            my research into industry.
                        </p>
                    </Col>
                    <Col xs={12} md={12} xl={3} className="image-center">
                        <img src={stock} alt=""/>
                    </Col>
                </Row>
                <Row className="add-space">
                    <Col xs={12} md={5} xl={2}>
                        <h5>Books Read</h5>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="left-column">
                        <p>➡️ Elements of Statistical Learning: By Trevor Hastie</p>
                        <p>➡️ The Man Who Solved the Market: Gregory Zuckerman</p>
                        <p>➡️ The Technical Analysis Masterclass: Rolf Schlotmann</p>
                        <p>➡️ The Psychology of Money: Morgan Housel</p>
                        <p>➡️ Machine Learning for Algorithmic Trading: Stephan Jansen</p>
                        <p>➡️ Modern Time Series Forecasting with Python: Manu Joseph</p>
                        <p>➡️ Rich Dad Poor Dad: Robert Kiyosaki</p>
                    </Col>
                </Row>



                <h4 className="add-space-row">{`2022`}</h4>
                <Row className="add-space-paragraph">
                    <Col xs={12} md={5} xl={2}>
                        <h5>Growth</h5>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="left-column custom-spacing">
                        <p>
                            Senior year was definitely a time of reflection 📢. During College App season, I think I tried recollecting every single moment, every memory,
                            and every hardship that had lead me to that point: sitting a screen for hours on end trying to figure out how to write my personal statement.
                            I hated this time, I cried during this time, and I, ultimately, rejoiced within this time after making Yale on December 15th. In a way, writing thousands
                            of words about myself opened my eyes to who I was, who I am, and who I want to be. I learned so much about myself. I learned to trust the process.
                            I learned that hard work always pays off no matter what. I learned that hope is actually real. I learned...
                        </p>
                        <p>
                            After I made it into my dream college, I finally felt free for once. All the goals I set in high school were finally achieved; I made it.
                            That winter break, I ended up going to Hawaii for vacation. Damn. Lying on that beach, staring up at the sky, and talking to myself was truly amazing.
                            That feeling of accomplishment, happiness, and freedom all combined into one – I'll never forget that feeling. And, when I head off to college
                            and into the next chapter of my life, I will work tirelessly to one day reach this point again.
                        </p>
                    </Col>
                    <Col xs={12} md={12} xl={3} className="image-center">
                        <img src={hawaii} alt=""/>
                    </Col>
                </Row>
                <Row className="add-space">
                    <Col xs={12} md={5} xl={2}>
                        <h5>Deep Learning: NLP</h5>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="left-column custom-spacing">
                        <p>
                            While trying to compete and qualify for the International Science Engineering Fair of 2022, I conducted an entire research paper about
                            utilizing Deep Learning to identify symptom words from Electronic Health Records with a process deemed Natural Language Processing (NLP). Throughout this research,
                            I learned the power of AI. Granted, my mathematical knowledge of how deep learning work was relatively novel, however, being able to
                            experiment with different models using Python, really opened my eye to this vast, new, growing field 🆘.

                        </p>
                        <p>
                            I learned what conducting research meant: all the little steps starting from Hypothesis all the way to reaching a Conclusion. My presentation skills
                            multiplied ten-fold. And, lastly, my programming skills widened greatly. It first began with figuring out how to handle data. Given a piece of text
                            how can I efficiently decompose it into a set of numbers that I can then field into a model? Even then, how do I design a problem where I can
                            utilized supervised-learning to train a model? These are all questions I had to ask, and figure out throughout this process. The packages I used
                            consisted of TensorFlow, PyTorch, Keras, Pandas, NumPy, and much more. Hint: one of the answers is to utilize Word-Embedding Models.

                        </p>
                    </Col>
                    <Col xs={12} md={12} xl={3} className="image-center">
                        <img src={nlp} alt=""/>
                    </Col>
                </Row>
                <Row className="add-space">
                    <Col xs={12} md={5} xl={2}>
                        <h5>Books Read</h5>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="left-column">
                        <p>➡️ The Intelligent Investor: Benjamin Graham</p>
                        <p>➡️ The Soulful Art of Persuasion: Jason Harris</p>
                        <p>➡️ The Four Hour Work-Week: Tim Ferris</p>
                        <p>➡️ How to Win Friends & Influence People: Dale Carnegie</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}