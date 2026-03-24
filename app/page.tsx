import ServiceCard from "../components/ServiceCard"
import ProductCard from "../components/ProductCard"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">Industrial Chemical Solutions</h1>
            <p className="hero-text">
              Leading Manufacturer of Industrial Chemicals
            </p>
            <a href="/products">
              <button className="hero-btn">View Products</button>
            </a>
          </div>

          
        </div>
      </section>
    </main>
  )
}