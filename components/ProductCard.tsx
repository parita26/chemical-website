type Props = {
  name: string
  image: string
}

export default function ProductCard({ name, image }: Props) {
  return (
    <div className="card">
      <img src={image} className="card-img" />
      <h3>{name}</h3>
      <button>View Details</button>
    </div>
  )
}