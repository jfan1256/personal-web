import styles from './Home.css';
import { NavBar } from '../components/NavBar';
import { Banner_Home } from '../components/Banner_Home';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className={styles.Home}>
        <NavBar />
        <Banner_Home />
        <Skills />
        <Contact />
        <Footer />
    </div>
  );
}

export default Home;
