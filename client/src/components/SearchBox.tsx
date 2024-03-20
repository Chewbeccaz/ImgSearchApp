import React, { useState } from "react";
import { SuggestedSearch } from "./SuggestedSearch";
import { searchImages } from "../services/SearchService";
import { Image } from "../models/Image";
import { SearchResult } from "./SearchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBox = () => {
  const [userSearch, setUserSearch] = useState("");
  const [searchResult, setSearchResult] = useState<Image[]>([]);
  const [suggestedSearch, setSuggestedSearch] = useState<string>("");
  const [searchTime, setSearchTime] = useState<string>("");

  const handleSearch = async () => {
    try {
      const { images, suggestedSearch, searchTime } = await searchImages(
        userSearch
      );
      setSearchResult(images);
      setSuggestedSearch(suggestedSearch);
      setSearchTime(searchTime);
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

  return (
    <>
      <div className="searchbox-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userSearch}
            onChange={handleChange}
            placeholder="Vad vill du söka på..."
          />
          <button type="submit" className="searchbox-submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      {suggestedSearch && (
        <SuggestedSearch
          suggestedSearch={suggestedSearch}
          onSuggestedSearch={handleSuggestedSearch}
        />
      )}
      <SearchResult images={searchResult} searchTime={searchTime} />
    </>
  );
};

export default SearchBox;
