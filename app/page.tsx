import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />

      <section className="section">
        <h2>Welcome to ChemTech Industry</h2>
        <p>
          We provide high-quality industrial chemicals, laboratory solutions,
          and global chemical supply.
        </p>

        <div className="grid">
          <div className="card">
            <h3>High Quality</h3>
            <p>Premium certified chemical products.</p>
          </div>

          <div className="card">
            <h3>Expert Team</h3>
            <p>Professional chemical engineers.</p>
          </div>

          <div className="card">
            <h3>Worldwide Supply</h3>
            <p>Global distribution network.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}