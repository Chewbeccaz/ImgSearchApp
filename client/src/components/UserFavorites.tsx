import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/userfavorites.css";

export const UserFavorites = () => {
  const { user } = useAuth0();
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

  return (
    <>
      <h2>Dina favoritbilder</h2>
      <div className="favorite-grid">
        {favoriteImages.length > 0 ? (
          favoriteImages.map((image, index) => (
            <div key={index} className="favorite-container">
              <img src={image} alt={`Favorite Image ${index}`} />
            </div>
          ))
        ) : (
          <p>Inga favoritbilder sparade</p>
        )}
      </div>
    </>
  );
};
