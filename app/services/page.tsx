import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />

      <section className="section">
        <h2>Our Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Chemical Manufacturing</h3>
            <p>Custom production solutions.</p>
          </div>

          <div className="card">
            <h3>Lab Testing</h3>
            <p>Accurate testing services.</p>
          </div>

          <div className="card">
            <h3>R&D</h3>
            <p>Innovative chemical research.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}