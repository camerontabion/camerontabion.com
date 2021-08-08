import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Head>
      <title>Cameron Keokolo Tabion</title>
    </Head>
    <Hero />
    <About />
    <Projects />
    <Footer />
  </>
);

export default Home;
