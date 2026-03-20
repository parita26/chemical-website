import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="section">
        <h2>Contact Us</h2>

        <form className="card">
          <input type="text" placeholder="Name" /><br /><br />
          <input type="email" placeholder="Email" /><br /><br />
          <textarea placeholder="Message"></textarea><br /><br />
          <button>Send</button>
        </form>
      </section>

      <Footer />
    </>
  );
}