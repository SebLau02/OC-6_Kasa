import { useContext } from "react"
import { ProductContext } from "../../contexts"
import { useParams } from "react-router-dom"

import Rating from "./rating"
import Carrousel from "./carrousel"

const Housing = () => {
  const { data } = useContext(ProductContext)
  const propertyId = useParams().id
  const property = data.find((property) => property.id === propertyId)
  return (
    <div>
      <Carrousel images={property.pictures} />
      <div>
        <h1>{property.title}</h1>
        <p>{property.location}</p>
        <div className="host">
          <p>{property.host.name}</p>
          <img src={property.host.picture} alt={property.host.name} />
        </div>
      </div>
      <div className="tag-rate">
        <div className="tags">
          {property.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <div className="rate">
          <Rating rate={property.rating} />
        </div>
      </div>
    </div>
  )
}

export default Housing
