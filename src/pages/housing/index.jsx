import { useContext } from "react"
import { ProductContext } from "../../contexts"
import { useParams } from "react-router-dom"

import Carrousel from "./carrousel"

const Housing = () => {
  const { data } = useContext(ProductContext)
  const propertyId = useParams().id
  const property = data.find((property) => property.id === propertyId)
  return (
    <div>
      <Carrousel images={property.pictures} />
    </div>
  )
}

export default Housing
