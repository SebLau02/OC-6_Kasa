import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import { Home, Housing, Error, About } from "./pages";
import { Layout } from "./components";
import { ProductContext } from "./contexts";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ data, setData }}>
      {error ? (
        <Error />
      ) : loading ? (
        <p>Loading</p>
      ) : (
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
                <Route path="/about" element={<About />} />
              </Routes>
              {/* <div>
            <Link to="/home">Home</Link>
            <Link to="/housing/1">Housing</Link>
            <Link to="/about">About</Link>
            <Link to="/zsdfvgbn">Error</Link>
          </div> */}
            </Layout>
          </Suspense>
        </Router>
      )}
    </ProductContext.Provider>
  );
}

export default App;
