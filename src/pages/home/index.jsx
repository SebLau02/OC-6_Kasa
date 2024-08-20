import HomeCover from "../../utils/images/home_cover.png"

const Home = () => {
  return (
    <div id="homepage">
      <div className="cover-container">
        <h1>Chez vous, partout et ailleurs</h1>

        <img src={HomeCover} alt="falaises face à la mer" />
      </div>
    </div>
  )
}

export default Home
