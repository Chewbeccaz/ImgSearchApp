// import { useState } from "react";
// import "../styles/SearchResults.css";
// import FavoriteButton from "./FavoriteButton";
// import { Image } from "../models/Image";
// import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";

// interface SearchResultsProps {
//   images: Image[];
// }

// export const SearchResult: React.FC<{ images: Image[] }> = ({ images }) => {
//   console.log("vilka bilder skickas med?", images);
//   const [favoriteImage, setFavoriteImage] = useState("");
//   const { user } = useAuth0();

//   const handleFavoriteClick = async (imgUrl: string) => {
//     setFavoriteImage(imgUrl);

//     // Logic for saving favorite image...
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/test",
//         {
//           id: user?.email,
//           favoriteImage: imgUrl,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Användaren är sparad", response.data);
//     } catch (error) {
//       console.log("Användaren sparades inte", error);
//     }
//   };

//   return (
//     <>
//       <div className="search-results">
//         <h2>Sökresultat</h2>
//         <div className="image-grid">
//           {images.map((result, index) => (
//             <div className="image-container" key={index}>
//               <img
//                 src={result.link}
//                 alt={`Bild ${result.title}`}
//                 className="image"
//               />
//               <FavoriteButton
//                 onClick={() => handleFavoriteClick(result.link)}
//                 imgUrl={result.link}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

import { useState } from "react";
import "../styles/SearchResults.css";
import FavoriteButton from "./FavoriteButton";
import { Image } from "../models/Image";

interface SearchResultsProps {
  images: Image[];
}

export const SearchResult: React.FC<{ images: Image[] }> = ({ images }) => {
  const [favoriteImage, setFavoriteImage] = useState("");

  const handleFavoriteClick = (imgUrl: string) => {
    setFavoriteImage(imgUrl);

    // Logic for saving favorite image...
  };

  return (
    <>
      <div className="search-results">
        <h2>Sökresultat</h2>
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
