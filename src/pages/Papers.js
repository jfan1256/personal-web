import styles from './Papers.css';
import { NavBar } from '../components/NavBar';
import {Banner_Papers} from "../components/Banner_Papers";
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Content_Papers} from "../components/Content_Papers";

function Papers() {
  return (
    <div className={styles.Papers}>
        <NavBar />
        <Banner_Papers />
        <Content_Papers />
        <Footer />
    </div>
  );
}

export default Papers;
