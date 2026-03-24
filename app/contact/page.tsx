"use client";

export default function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-box">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5}></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>

      <div className="map-box">
        <iframe
          src="https://www.google.com/maps?q=Ahmedabad&output=embed"
          width="100%"
          height="300"
          style={{ border: "0", borderRadius: "10px", marginTop: "20px" }}
          loading="lazy"
        />
      </div>
    </section>
  );
}