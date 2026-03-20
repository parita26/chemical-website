import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <>
      <Navbar />

      <section className="section">
        <h2>Our Products</h2>

        <div className="grid">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" />
            <h3>Industrial Acid</h3>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc" />
            <h3>Lab Chemicals</h3>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" />
            <h3>Organic Compounds</h3>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}