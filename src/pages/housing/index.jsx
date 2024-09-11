import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../contexts"
import { useParams, useNavigate } from "react-router-dom"

import Rating from "./rating"
import Carrousel from "./carrousel"
import { Dropdown } from "../../components"

const Housing = () => {
  const { data } = useContext(ProductContext)
  const propertyId = useParams().id
  const property = data.find((property) => property.id === propertyId)
  const navigate = useNavigate()

  const dropdownList = [
    {
      title: "Description",
      text: [property?.description],
    },
    {
      title: "Equipements",
      text: property?.equipments,
    },
  ]

  useEffect(() => {
    if (!property) {
      navigate("/error")
    }
  }, [property])

  return (
    <>
      {property && (
        <div id="housing">
          <Carrousel images={property.pictures} />
          <div className="generals-infos">
            <div className="property-infos">
              <h1>{property.title}</h1>
              <p>{property.location}</p>
              <div className="property-infos__tags">
                {property.tags.map((tag, i) => (
                  <span tabIndex="0" key={tag + i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="host-rate">
              <div className="host-rate__host">
                <ul>
                  {property.host.name.split(" ").map((word, i) => (
                    <li key={i}>{word}</li>
                  ))}
                </ul>
                <img src={property.host.picture} alt={property.host.name} />
              </div>
              <div className="host-rate__rate">
                <Rating rate={property.rating} />
              </div>
            </div>
          </div>

          <div className="desc-fittings">
            {dropdownList.map((dropdown, i) => (
              <div key={dropdown.title + i}>
                <Dropdown title={dropdown.title} text={dropdown.text} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Housing
