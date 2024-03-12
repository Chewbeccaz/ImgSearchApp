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

export const UserFavorites = () => {
  return <div>Favoritbilderna</div>;
};
