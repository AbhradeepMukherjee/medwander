# MedWander-Assignment

### A comprehensive project integrating backend and frontend technologies for managing data with database operations, user interfaces, and external data sources.

## Installation Steps:

### Clone the Repository:

```
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### Backend Setup:

1. Navigate to the backend directory:
```
cd backend
```

2. Install the required dependencies:
```
npm install
```

3. Set up your environment variables:
   - Copy `.sample.env` to `.env`:
     ```
     cp .sample.env .env
     ```
   - Fill in the necessary environment variables in the `.env` file (e.g., database URL, API keys).

### Frontend Setup:

1. Navigate to the frontend directory:
```
cd ../frontend
```

2. Install the required dependencies:
```
npm install
```


## How to Run the Application:

### Run the Backend Server:

1. Navigate to the backend directory if not already there:

```
cd backend
```

2. Start the server:

```
npm run start
```

### Run the Frontend Server:

1. Navigate to the frontend directory if not already there:

```
cd frontend
```

2. Start the server:

```
npm run dev
```

3. Open your browser and go to:

```
http://localhost:5173
```


## Project Functionality Overview: 

### 1. Initial project setup and configuration

- Initialized a Node.js project.
- Added Express framework and Prisma for ORM.
- Created a SQL (postgresql) database on Aiven.io.
- Updated package.json with dependencies and scripts.
- Structured backend with folders and set up basic Express server functionalities.
- Configured environment variables with .env and .sample.env files.

### 2. Refactor database schema for phone numbers and integrate backend operations

- Implemented POST route to create records in the SQL database.
- Added GET route to retrieve entries from the SQL database.
- Updated Prisma schema, changing the type of "phoneNumber" attribute from Integer to String for better compatibility and functionality.

### 3. Initialized React frontend with Vite, integrated Material UI, validation, Axios, and localStorage

- Set up a frontend React application using Vite for fast development.
- Used Material UI for building styled components and UI elements.
- Implemented input field validation to ensure correct phone number format, validating against entered country codes.
- Integrated Axios for seamless communication between the backend API and frontend UI.
- Implemented localStorage to store user details locally on the client side for persistent user sessions.

### 4. Connected to Google spreadsheet, created listing page, added refresh functionality, and ensured responsiveness

- Integrated functionality to connect to a Google spreadsheet using the googleapis npm package.
- Designed and implemented a listing page using Material UI for consistent styling and responsive layout.
- Added a "Refresh" button on the listing page to fetch and update data from the SQL database in real-time.
- Ensured the application's responsiveness for optimal viewing and usability across both mobile and desktop devices.

## Change Log:

### 1: Initial project setup and configuration

- Initialized Node.js project.
- Added Express and Prisma.
- Created a SQL database on Aiven.io.
- Updated package.json to include necessary dependencies and scripts.
- Created backend folder.
- Added index.js with basic Express server setup (using CORS and express.json()).
- Configured app to listen on a specified port.
- Added empty .env and .sample.env files for environment variables.

### 2: Refactor database schema phone numbers and integrate backend operations for create and read the entries

- Implemented POST and GET routes:
  1. Added POST route to create a record in the SQL database.
  2. Added GET route to retrieve results from the SQL database.
-  Updated Prisma schema:
   1. Changed the type of "phoneNumber" attribute in the schema from Integer to String.
 
### 3: Initialized React frontend with Vite, integrated Material UI components, validation, Axios, and localStorage for user details

- Set up frontend React application using Vite.
- Utilized Material UI for building components and styling.
- Implemented input field validation to ensure correct phone number format matching the entered country code.
- Integrated Axios for communication between backend and frontend.
- Implemented localStorage to store user details locally.

### 4: Connected to Google spreadsheet, created listing page with Material UI, added refresh functionality, and ensured responsiveness:

- Implemented functionality to connect to an online Google spreadsheet using the npm package googleapis.
- Created a listing page using Material UI for styling and components.
- Added a "Refresh" button on the listing page to update listings with new data from the SQL database on click.
- Ensured responsiveness for both mobile and desktop views.

## Screenshots: 

### Home(/):

![Home](https://github.com/AbhradeepMukherjee/medwander/assets/132974862/7c8c87d0-a269-4f50-b713-75ed1fb65657)

### Form A(/form-a):

![FormA](https://github.com/AbhradeepMukherjee/medwander/assets/132974862/52b892f7-e44a-4cab-b153-12a3360499b1)

### Form B(/form-b):

![FormB](https://github.com/AbhradeepMukherjee/medwander/assets/132974862/7f86a398-1990-4eff-aa3a-9ae6cf4114ba)

### Listing(/listing): 

![listing](https://github.com/AbhradeepMukherjee/medwander/assets/132974862/dcd9f562-7a71-4997-8f42-b072abfd154f)




