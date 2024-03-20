import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState } from "react";

interface FavoriteButtonProps {
  onClick: () => void;
  imgUrl: string;
}

export const FavoriteButton = ({ onClick, imgUrl }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { user } = useAuth0();

  const testClick = async (imgUrl: string) => {
    console.log("Test1.");
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        {
          id: user?.email,
          favoriteImage: imgUrl,
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

  const handleClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    onClick();
    testClick(imgUrl);
  };

  return (
    <button
      onClick={handleClick}
      className="favorite-button"
      style={{
        backgroundColor: "ivory",
        border: "1px solid black",
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        style={{
          fill: isFavorite ? "red" : "none",
          stroke: "red",
          strokeWidth: "2",
        }}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
};

export default FavoriteButton;
