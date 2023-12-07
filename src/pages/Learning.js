import styles from './Learning.css';
import { NavBar } from '../components/NavBar';
import { Banner_Learning } from '../components/Banner_Learning';
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Content_Learning} from "../components/Content_Learning";

function Learning() {
  return (
    <div className={styles.Learning}>
        <NavBar />
        <Banner_Learning />
        <Content_Learning />
        <Footer />
    </div>
  );
}

export default Learning;
