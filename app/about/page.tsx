export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-image">
          <img src="/service1.jpg" alt="company" />
        </div>

        <div className="about-content">
          <h1>About Our Company</h1>
          <p>
            We are a leading industrial chemical company providing high quality
            chemicals for pharmaceutical, textile, agriculture and water
            treatment industries. Our company focuses on quality, safety and
            innovation.
          </p>

          <div className="about-boxes">
            <div className="about-box">
              <h2>10+</h2>
              <p>Years Experience</p>
            </div>

            <div className="about-box">
              <h2>50+</h2>
              <p>Products</p>
            </div>

            <div className="about-box">
              <h2>100+</h2>
              <p>Clients</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}