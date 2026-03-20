import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="section">
        <h2>About Us</h2>
        <p>
          ChemTech Industry is a leading provider of industrial chemicals,
          delivering innovation, safety, and quality across global markets.
        </p>
      </section>

      <Footer />
    </>
  );
}