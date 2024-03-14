import { useState } from "react";
import "../styles/SearchResults.css";
import FavoriteButton from "./FavoriteButton";
import { Image } from "../models/Image";

interface SearchResultsProps {
  images: Image[];
  searchTime: string;
}

export const SearchResult: React.FC<SearchResultsProps> = ({
  images,
  searchTime,
}) => {
  const [favoriteImage, setFavoriteImage] = useState("");

  const handleFavoriteClick = (imgUrl: string) => {
    setFavoriteImage(imgUrl);
  };

  const hasResults = images.length > 0;

  if (!hasResults) {
    return null;
  }

  return (
    <>
      <div className="search-results">
        {searchTime && <p>Sökningen tog {searchTime} sekunder.</p>}
        <div className="image-grid">
          {images.map((result, index) => (
            <div className="image-container" key={index}>
              <img
                src={result.link}
                alt={`Bild ${result.title}`}
                className="image"
              />
              <FavoriteButton
                onClick={() => handleFavoriteClick(result.link)}
                imgUrl={result.link}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
