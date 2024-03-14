import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import SearchBox from "./SearchBox";
import searchifyImage from "../images/Searchify.png";
import "../styles/imgsearchapp.css";

export const ImgSearchApp = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
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
                <h2>Find it. Save it. Love it.</h2>
              </div>
            </div>
            <div className="searchify-img">
              <img src={searchifyImage} alt="Searchify image" />
            </div>
          </div>
          <LoginButton />
        </>
      )}
    </div>
  );
};
