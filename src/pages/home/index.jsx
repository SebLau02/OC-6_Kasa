import { useContext } from "react"
import { ProductContext } from "../../contexts"
import Card from "./card"
import HomeCover from "../../utils/images/home_cover.png"

const Home = () => {
  const { data } = useContext(ProductContext)

  return (
    <div id="homepage">
      <header className="cover-container">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={HomeCover} alt="falaises face à la mer" />
      </header>
      <main>
        {data.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </main>
    </div>
  )
}

export default Home
