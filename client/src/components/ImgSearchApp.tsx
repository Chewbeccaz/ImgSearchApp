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
export const ImgSearchApp = () => {
  //Här kan man också hämta ut annat om man vill.
  //{isAuthenticated, user, isLoading}

  //Här kan man komma åt user med.
  const { isAuthenticated, user } = useAuth0();

  //   return isAuthenticated ? <LogoutButton /> : <LoginButton />;

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
          <SearchBox />
          <button onClick={testClick}>Testknappen</button>
          {/* <SearchResults /> */}
        </>
      ) : (
        <>
          <h2>Vänligen logga in</h2>
          <LoginButton />
        </>
      )}
    </div>
  );
};
