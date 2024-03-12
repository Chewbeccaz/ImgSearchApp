// import { useAuth0 } from "@auth0/auth0-react";
// import LogoutButton from "./LogoutButton";
// import LoginButton from "./LoginButton";
// import SearchBox from "./SearchBox";
// export const ImgSearchApp = () => {
//   //Här kan man också hämta ut annat om man vill.
//   //{isAuthenticated, user, isLoading}
//   const { isAuthenticated } = useAuth0();

//   //   return isAuthenticated ? <LogoutButton /> : <LoginButton />;
//   return (
//     <div>
//       {isAuthenticated ? (
//         <>
//           <h2>Välkommen!</h2>
//           <LogoutButton />
//           <SearchBox />
//           {/* <SearchResults /> */}
//         </>
//       ) : (
//         <>
//           <h2>Vänligen logga in</h2>
//           <LoginButton />
//         </>
//       )}
//     </div>
//   );
// };

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import SearchBox from "./SearchBox";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserFavorites } from "./UserFavorites";
import searchifyImage from "../images/Searchify.png";
import "../styles/imgsearchapp.css";

export const ImgSearchApp = () => {
  //Här kan man också hämta ut annat om man vill.
  //{isAuthenticated, user, isLoading}

  //Här kan man komma åt user med.
  const { isAuthenticated, user } = useAuth0();
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const testClick = async () => {
    console.log("Test1.");
    try {
      const response = await axios.post(
        "http://localhost:3000/test",
        {
          id: "testUser",
          favoriteImages: ["testUrl"],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("användare är sparad,", response.data);
    } catch (error) {
      console.log("användare sparades ej", error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h2>Välkommen!</h2>
          <LogoutButton />
          <button onClick={toggleFavorites}>
            {showFavorites ? "Hem" : "Mina Favoriter"}
          </button>
          {showFavorites ? <UserFavorites /> : <SearchBox />}
          {/* <SearchBox /> */}
          <button onClick={testClick}>Testknappen</button>
          {/* <SearchResults /> */}
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
