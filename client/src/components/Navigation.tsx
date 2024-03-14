import { NavLink } from "react-router-dom";
import "../styles/navigation.css";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Logging in...Please wait!</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <img
                className="profile-img"
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
                <FontAwesomeIcon icon={faHome} className="nav-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/userfavorites">
                <FontAwesomeIcon icon={faHeart} className="nav-icon-heart" />
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      <span>Välkommen, {user?.name}!</span>
    </>
  );
};
