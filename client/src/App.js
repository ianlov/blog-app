import "./App.css";

import Home from "./screens/Home/Home";
import NewPost from "./screens/NewPost/NewPost.jsx";
// import ProductCard from "./component/ProductCard/ProductCard.jsx"


function App() {
  return (
    <div className="App">
      <Home />
      <NewPost />
      {/* <ProductCard /> */}
    </div>
  );
}

export default App;
