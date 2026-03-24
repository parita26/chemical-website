import ProductCard from "../../components/ProductCard"

export default function Products() {
  const products = [
    { name: "Sulphuric Acid", image: "/product1.jpg" },
    { name: "Hydrochloric Acid", image: "/product2.jpg" },
    { name: "Sodium Hydroxide", image: "/product3.jpg" },
    { name: "Nitric Acid", image: "/product4.jpg" },
    { name: "Ammonia Solution", image: "/product5.jpg" },
    { name: "Calcium Carbonate", image: "/product6.jpg" },
  ]

  return (
    <section className="section">
      <h1>Our Products</h1>
      <div className="card-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
    </section>
  )
}