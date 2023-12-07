import styles from './Projects.css';
import { NavBar } from '../components/NavBar';
import { Banner_Projects } from '../components/Banner_Projects';
import { Content_Projects } from '../components/Content_Projects';
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  return (
    <div className={styles.Learning}>
        <NavBar />
        <Banner_Projects />
        <Content_Projects />
        <Footer />
    </div>
  );
}

export default Projects;
