import { NavLink } from "react-router-dom";
import "../styles/navigation.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import { UserFavorites } from "./UserFavorites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Logging in...Please wait!</div>;
  }

  // if (isLoading) {
  //   return <div>Logging in...Please wait!</div>;
  // }
  // if (isAuthenticated && (
  //   <>
  //   <img src={user?.picture} alt={user?.name} style={{marginRight: "8px"}}/>
  //   <h2>Välkommen, {user?.name}!</h2>
  //   <LogoutButton />
  //   <UserFavorites />
  //   </>
  // )) {
  //   return (
  //     <>
  //       <nav>
  //         <ul>
  //           <li>
  //             <NavLink to="/">Hem</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/userfavorites">Mina Favoriter</NavLink>
  //           </li>
  //         </ul>
  //       </nav>
  //     </>
  //   );
  // };____________
  return (
    <>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <img
                src={user?.picture}
                alt={user?.name}
                style={{
                  marginRight: "10px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              />
            </li>
            <li>
              <NavLink to="/">
                {" "}
                <FontAwesomeIcon
                  icon={faHome}
                  className="nav-icon"
                  // style={{
                  //   fontSize: "50px",
                  //   color: "a7cffa",
                  //   marginRight: "10px",
                  // }}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/userfavorites">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="nav-icon-heart"
                  // style={{
                  //   fontSize: "50px",
                  //   color: "a7cffa",
                  //   marginRight: "10px",
                  // }}
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      <span>Välkommen, {user?.name}!</span>
    </>
  );
};
