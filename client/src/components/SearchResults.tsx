import "../styles/SearchResults.css";
import FavoriteButton from "./FavoriteButton";

interface SearchResultsProps {
  images: string[];
}

export const SearchResults = ({ images }: SearchResultsProps) => {
  const handleFavoriteClick = (index: number) => {
    console.log(`Bild ${index} är min favorit`);
  };
  return (
    <div className="search-results">
      <h2>Sökresultat</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <img src={image} alt={`Bild ${index}`} className="image" />
            <FavoriteButton onClick={() => handleFavoriteClick(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};
