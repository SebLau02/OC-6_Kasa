import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Card = ({ product }) => {
  return (
    <Link to={`/housing/${product.id}`}>
      <article className="product">
        <section>
          <img src={product.cover} alt={`photo de ${product.title}`} />
        </section>
        <section>
          <h2>{product.title}</h2>
        </section>
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
