import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}>
      Log Out
    </button>
  );
};

export default LogoutButton;
