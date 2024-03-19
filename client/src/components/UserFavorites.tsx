import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/userfavorites.css";

export const UserFavorites = () => {
  const { user, isAuthenticated } = useAuth0();
  const [favoriteImages, setFavoriteImages] = useState<string[]>([]);

  useEffect(() => {
    if (!user || !user.email) return;

    const userId = user.email;
    const url = `http://localhost:3000/users/${userId}/favorites`;

    const fetchUserFavorites = async () => {
      try {
        const response = await axios.get(url);
        setFavoriteImages(response.data);
        console.log("sätter Response data:", response.data);
      } catch (error) {
        console.error("fel på hämtning av favoriter1", error);
      }
    };

    fetchUserFavorites();
  }, [user?.email]);

  //Deletefunktionen
  const removeFavoriteImage = async (image: string) => {
    if (isAuthenticated && user) {
      const url = `http://localhost:3000/users/${
        user.email
      }/favorites/${encodeURIComponent(image)}`;
      try {
        const response = await axios.delete(url);
        console.log(response.data);
        setFavoriteImages((prevFavorites) =>
          prevFavorites.filter((img) => img !== image)
        );
      } catch (error) {
        console.error("Fel vid borttagning av favoritbild", error);
      }
    }
  };

  return (
    <>
      <h2>Dina favoritbilder</h2>
      <div className="favorite-grid">
        {favoriteImages.length > 0 ? (
          favoriteImages.map((image, index) => (
            <div key={index} className="favorite-container">
              <img src={image} alt={`Favorite Image ${index}`} />
              <button
                className="delete-button"
                onClick={() => removeFavoriteImage(image)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))
        ) : (
          <p>Inga favoritbilder sparade</p>
        )}
      </div>
    </>
  );
};
