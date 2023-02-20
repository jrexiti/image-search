import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList";

function App() {
    const [images, setImages] = useState([])
    const handleSubmit = async (term) => {
        console.log('Searched for: ', term)
        const result = await searchImages(term)
        setImages(result)

    }
  return <div className="full-page">
      <SearchBar onSubmit={handleSubmit} />
      <div className="list-container">
      <ImageList images={images} />
      </div>
  </div>;
}

export default App;
