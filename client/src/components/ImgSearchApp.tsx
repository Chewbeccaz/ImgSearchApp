import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import SearchBox from "./SearchBox";
import searchifyImage from "../images/Searchify.png";
import magnifyingImage from "../images/magnifying.png";
import "../styles/imgsearchapp.css";

export const ImgSearchApp = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <div className="magnifying-img">
            <img
              src={magnifyingImage}
              className="mag-img"
              alt="magnifying glass"
            />
          </div>
          <h1>Searchify</h1>
          <SearchBox />
          {/* <LogoutButton /> */}
        </>
      ) : (
        <>
          <div className="searchify-wrapper">
            <div className="text-wrapper">
              <h1>Searchify</h1>
              <div className="label-box">
                <h3>Find it. Save it. Love it.</h3>
              </div>
            </div>
            <div className="searchify-img">
              <img
                src={searchifyImage}
                alt="Searchify image"
                className="search-img"
              />
            </div>
          </div>
          <LoginButton />
        </>
      )}
    </div>
  );
};
