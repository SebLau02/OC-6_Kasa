import { useState } from "react"
import PropTypes from "prop-types"

import Next from "../../utils/images/next.svg"
import Prev from "../../utils/images/prev.svg"

const Carrousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0)

  const handleSlide = (e) => {
    if (e.currentTarget.id === "prev") {
      if (activeImage === 0) {
        setActiveImage(images.length - 1)
      } else {
        setActiveImage(activeImage - 1)
      }
    }
    if (e.currentTarget.id === "next") {
      if (activeImage === images.length - 1) {
        setActiveImage(0)
      } else {
        setActiveImage(activeImage + 1)
      }
    }
  }

  return (
    <div id="carrousel" role="region" aria-label="Carrousel d'images">
      {images.length > 1 && (
        <>
          <button id="prev" aria-label="image précédente" onClick={handleSlide}>
            <img src={Prev} alt="Précédent" />
          </button>
          <button id="next" aria-label="image suivante" onClick={handleSlide}>
            <img src={Next} alt="Suivant" />
          </button>
        </>
      )}
      <img
        src={images[activeImage]}
        alt={`Description de l'image, ${activeImage + 1} sur ${images.length}`}
        aria-live="polite"
      />
      {images.length > 1 && (
        <span id="carrousel__total-image">{`${activeImage + 1}/${
          images.length
        }`}</span>
      )}
    </div>
  )
}

Carrousel.propTypes = {
  images: PropTypes.array.isRequired,
}
export default Carrousel
