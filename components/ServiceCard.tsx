type Props = {
  title: string
  image: string
}

export default function ServiceCard({ title, image }: Props) {
  return (
    <div className="card">
      <img src={image} className="card-img" />
      <h3>{title}</h3>
    </div>
  )
}