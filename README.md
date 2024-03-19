<img width="1118" alt="Skärmavbild 2024-03-18 kl  10 10 48" src="https://github.com/Chewbeccaz/ImgSearchApp/assets/144778875/fa027c83-e024-47f1-9721-ff6bc0168636">

<img width="1428" alt="Skärmavbild 2024-03-18 kl  10 11 13" src="https://github.com/Chewbeccaz/ImgSearchApp/assets/144778875/3bc02d31-891e-4c3f-850e-13c4da175d50">



# Searchify!
My first fullstack-application, an image search app using Google Custom Search and Auth0

### Key Features
  - User authentication using Auth0. Compatible with Google and Github accounts. 
  - When logged in, search for images with suggestions if mispelled.
  - Display search results and duration of search time.
  - Function to save your favorite images. 
  - A favorite page with all your chosen favorites. 

### Set up
1. Make sure you have **Node.js** installed.
2. Clone repository from [Github](https://github.com).
3. Open your Terminal in VS Code (or preferred developing tool).
    - New Terminal for Client: First `cd client`, then run `npm i` and `npm run dev`.
    - New Terminal for Server: First `cd server`, Run `npm i` and `node server.js`.
4. Navigate to [http://localhost:5173/](http://localhost:5173/) in your browser to use the app.

### API Endpoints
  - POST /users
  - GET users/${userId}/favorites
