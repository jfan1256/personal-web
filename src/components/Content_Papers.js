import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/building.png";
import selfPortrait from "../assets/img/self-portrait.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
export const Content_Papers = () => {
    return (
        <section className="content-papers" id="home">
            <Container>
                <div className="divider"></div>
                <Row>
                    <h4>{`Publications`}</h4>
                    <Col xs={12} md={5} xl={3}>
                        <h5> FOLIO: Natural Language Reasoning with First-Order Logic </h5>
                        <h6>Computation and Language</h6>
                    </Col>
                    <Col xs={12} md={6} xl={7} className="left-column">
                        <p>
                            We present FOLIO, a human-annotated, open-domain, and logically complex and diverse dataset for reasoning in natural language (NL),
                            equipped with first order logic (FOL) annotations. FOLIO consists of 1,435 examples (unique conclusions), each paired with one of 487
                            sets of premises which serve as rules to be used to deductively reason for the validity of each conclusion. The logical correctness
                            of premises and conclusions is ensured by their parallel FOL annotations, which are automatically verified by our FOL inference engine.
                            In addition to the main NL reasoning task, NL-FOL pairs in FOLIO automatically constitute a new NL-FOL translation dataset using FOL
                            as the logical form. Our experiments on FOLIO systematically evaluate the FOL reasoning ability of supervised fine-tuning on medium-sized language
                            models (BERT, RoBERTa) and few-shot prompting on large language models (GPT-NeoX, OPT, GPT-3, Codex). For NL-FOL translation, we experiment
                            with GPT-3 and Codex. Our results show that one of the most capable Large Language Model (LLM) publicly available, GPT-3 davinci,
                            achieves only slightly better than random results with few-shot prompting on a subset of FOLIO, and the model is especially bad at
                            predicting the correct truth values for False and Unknown conclusions. Our dataset and code are available at this https URL.</p>
                        <a href="https://arxiv.org/abs/2209.00840" target="_blank" className='link'>View Full Paper</a>
                        <a href="https://github.com/Yale-LILY/FOLIO" target="_blank" className='link'>Github</a>
                    </Col>
                </Row>
                <Row className="add-space">
                    <h4>{`Conferences`}</h4>
                    <Col xs={12} md={3} xl={3}>
                        <h5> Automating Symptom Information Extraction from the Electronic Health Record: A Context Aware Deep Learning Approach  </h5>
                        <h6>International Science and Engineering Fair 2022</h6>
                    </Col>
                    <Col xs={12} md={6} xl={7} className="left-column">
                        <p>
                            Extracting symptom information from the electronic health record (EHR) is a task that healthcare providers and researchers regularly
                            deal with. Traditionally, symptom extraction is a manual search process that costs time and human efforts. With the increasing use
                            of EHR data in routine hospital encounters and clinical visits, evidence suggests that healthcare providers are at a higher risk for
                            EHR burden and burnout. This is true, especially during the COVID-19 pandemic. In fact, time spent on analyzing EHR data increased by
                            157% compared to the pre-pandemic average. How to quickly identify patient symptom information from EHRs is thus of paramount importance
                            for increasing healthcare providers productivity and reducing the burnout rate. In this research, we propose a deep learning-based framework
                            that combines customized word embedding techniques and deep neural networks for symptom extraction. Using the Medical Information Mart
                            for Intensive Care (MIMIC-II) Database, we experiment various models with different combinations of word embeddings plus a bidirectional
                            long short-term memory (biLSTM) neural network to automate symptom extraction. The best-performing model achieves an F1 score of 0.956
                            using a pre-trained GLoVe embedding concatenated with a self-trained FastText embedding plus a biLSTM neural network classifier. This
                            model efficiently extracts symptom information and outperforms the benchmarks by more than 10%. Adopting such a fast and accurate system
                            can potentially reduce EHR burden and improve healthcare and research. </p>
                        <a href={`${process.env.PUBLIC_URL}/symptom_extraction_journal_paper.pdf`} target="_blank" rel="noopener noreferrer" className='link'>View Full Paper</a>
                        <a href="https://github.com/jfan1256/symptom-extraction" target="_blank" className='link'>Github</a>
                    </Col>
                </Row>
                <Row className="add-space">
                    <h4>{`Contributions`}</h4>
                    <Col xs={12} md={3} xl={3}>
                        <h5> The Ghost in the Machine: Generating Beliefs with Large Language Models </h5>
                        <h6>Finalist for BlackRock Applied Research Award</h6>
                    </Col>
                    <Col xs={12} md={6} xl={7} className="left-column">
                        <p>
                            I introduce a methodology to generate economic expectations by applying large language models to historical news.
                            Leveraging this methodology, I make three key contributions. (1) I show generated expectations closely match existing survey
                            measures and capture many of the same deviations from full-information rational expectations. (2) I use my method to generate
                            120 years of economic expectations from which I construct a measure of economic sentiment capturing systematic errors in generated expectations.
                            (3) I then employ this measure to investigate behavioral theories of bubbles. Using a sample of industry-level run-ups over the past
                            100 years, I find that an industry's exposure to economic sentiment is associated with a higher probability of a crash and lower future returns.
                            Additionally, I find a higher degree of feedback between returns and sentiment during run-ups that crash, consistent with return
                            extrapolation as a key mechanism behind bubbles.</p>
                        <a href="https://lelandbybee.com/files/LLM.pdf" target="_blank" className='link'>View Full Paper</a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}