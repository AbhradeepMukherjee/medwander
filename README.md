### MedWander-Assignment

## Change Log:

# 1: Initial project setup and configuration

- Initialized Node.js project.
- Added Express and Prisma.
- Created a SQL database on Aiven.io.
- Updated package.json to include necessary dependencies and scripts.
- Created backend folder.
- Added index.js with basic Express server setup (using CORS and express.json()).
- Configured app to listen on a specified port.
- Added empty .env and .sample.env files for environment variables.

# 2: Refactor database schema phone numbers and integrate backend operations for create and read the entries

- Implemented POST and GET routes:
  1. Added POST route to create a record in the SQL database.
  2. Added GET route to retrieve results from the SQL database.
-  Updated Prisma schema:
   1. Changed the type of "phoneNumber" attribute in the schema from Integer to String.
 
# 3: Initialized React frontend with Vite, integrated Material UI components, validation, Axios, and localStorage for user details

- Set up frontend React application using Vite.
- Utilized Material UI for building components and styling.
- Implemented input field validation to ensure correct phone number format matching the entered country code.
- Integrated Axios for communication between backend and frontend.
- Implemented localStorage to store user details locally.

# Connected to Google spreadsheet, created listing page with Material UI, added refresh functionality, and ensured responsiveness

- Implemented functionality to connect to an online Google spreadsheet using the npm package googleapis.
- Created a listing page using Material UI for styling and components.
- Added a "Refresh" button on the listing page to update listings with new data from the SQL database on click.
- Ensured responsiveness for both mobile and desktop views.

