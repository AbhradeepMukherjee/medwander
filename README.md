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
