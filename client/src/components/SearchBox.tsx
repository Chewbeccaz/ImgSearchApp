// import React, { useState } from "react";
// import { SuggestedSearch } from "./SuggestedSearch";
// import { searchImages } from "../services/SearchService";
// import { Image } from "../models/Image";
// import { SearchResult } from "./SearchResult";
// // import SearchResults from "./SearchResults"; //Varför måste jag importera såhär?

// export const SearchBox = () => {
//   const [userSearch, setUserSearch] = useState("");
//   const [searchResult, setSearchResult] = useState<Image[]>([]);
//   const [suggestedSearch, setSuggestedSearch] = useState<string>("");

//   const handleSearch = async () => {
//     try {
//       const { images, suggestedSearch } = await searchImages(userSearch);

//       setSearchResult(images);
//       setSuggestedSearch(suggestedSearch);
//     } catch (error) {
//       console.log("Error fetching images", error);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUserSearch(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Söker efter:", userSearch);
//     handleSearch();
//   };

//   //Ny funktion för suggestedSearch
//   const handleSuggestedSearch = () => {
//     setUserSearch(suggestedSearch);
//     handleSearch();
//   };

//   //Gör En ny komponent av suggestedSearch?
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={userSearch}
//           onChange={handleChange}
//           placeholder="Vad vill du söka på..."
//         />
//         <button type="submit">Sök</button>
//       </form>
//       {suggestedSearch && (
//         <SuggestedSearch
//           suggestedSearch={suggestedSearch}
//           onSuggestedSearch={handleSuggestedSearch}
//         />
//       )}
//       {/* <SearchResults images={searchResult} /> */}
//       <SearchResult images={searchResult} />
//     </>
//   );
// };

// export default SearchBox;

import React, { useState } from "react";
import { SuggestedSearch } from "./SuggestedSearch";
import { searchImages } from "../services/SearchService";
import { Image } from "../models/Image";
import { SearchResult } from "./SearchResult";
// import SearchResults from "./SearchResults"; //Varför måste jag importera såhär?

export const SearchBox = () => {
  const [userSearch, setUserSearch] = useState("");
  const [searchResult, setSearchResult] = useState<Image[]>([]);
  const [suggestedSearch, setSuggestedSearch] = useState<string>("");

  const handleSearch = async () => {
    try {
      const { images, suggestedSearch } = await searchImages(userSearch);
      setSearchResult(images);
      setSuggestedSearch(suggestedSearch);
    } catch (error) {
      console.log("Error fetching images", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Söker efter:", userSearch);
    handleSearch();
  };

  //Ny funktion för suggestedSearch
  const handleSuggestedSearch = () => {
    setUserSearch(suggestedSearch);
    handleSearch();
  };

  //Gör En ny komponent av suggestedSearch?
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userSearch}
          onChange={handleChange}
          placeholder="Vad vill du söka på..."
        />
        <button type="submit">Sök</button>
      </form>
      {suggestedSearch && (
        <SuggestedSearch
          suggestedSearch={suggestedSearch}
          onSuggestedSearch={handleSuggestedSearch}
        />
      )}
      {/* <SearchResults images={searchResult} /> */}
      <SearchResult images={searchResult} />
    </>
  );
};

export default SearchBox;
