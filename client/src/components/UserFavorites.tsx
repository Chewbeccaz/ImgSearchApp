// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';

// export const UserFavorites = () => {
//   const { user } = useAuth0();
//   const [favoriteImages, setFavoriteImages] = useState([]);

//   useEffect(() => {
//     const fetchFavoriteImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/users');
//         const userData = response.data.find(userData => userData.id === user?.email);
//         if (userData && userData.favoriteImages) {
//           setFavoriteImages(userData.favoriteImages);
//         }
//       } catch (error) {
//         console.error('Error fetching favorite images:', error);
//       }
//     };

//     fetchFavoriteImages();
//   }, [user]);

//   return (
//     <>
//       <h2>Mina favoritbilder</h2>
//       <div>
//         {favoriteImages.length > 0 ? (
//           favoriteImages.map((image, index) => (
//             <img key={index} src={image} alt={`Favorite Image ${index}`} />
//           ))
//         ) : (
//           <p>Inga favoritbilder sparade</p>
//         )}
//       </div>
//     </>
//   );
// };

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Image } from "../models/Image";
import "../styles/userfavorites.css";

export const UserFavorites = () => {
  const { user } = useAuth0();
  const [favoriteImages, setFavoriteImages] = useState<string[]>([]);

  const navigate = useNavigate();

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
