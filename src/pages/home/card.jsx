import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Card = ({ product }) => {
  console.log(product.id)
  return (
    <Link to={`/housing/${product.id}`}>
      <article className="product">
        <img src={product.cover} alt={`photo de ${product.title}`} />
        <h2>{product.title}</h2>
      </article>
    </Link>
  )
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
export default Card
