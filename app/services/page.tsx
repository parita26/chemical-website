import ServiceCard from "../../components/ServiceCard"

export default function Services() {
  const services = [
    { title: "Chemical Manufacturing", image: "/service1.jpg" },
    { title: "Laboratory Testing", image: "/service2.jpg" },
    { title: "Industrial Consulting", image: "/service3.jpg" },
    { title: "Water Treatment Solutions", image: "/service4.jpg" },
    { title: "Quality Control", image: "/service5.jpg" },
    { title: "Research & Development", image: "/service6.jpg" },
  ]

  return (
    <section className="section">
      <h1>Our Services</h1>
      <div className="card-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
    </section>
  )
}