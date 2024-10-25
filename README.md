# Blogging Website

Welcome to the Blogging Website! This project is a simple yet powerful platform for users to read, create, and manage blogs. It has been built using React and Recoil for efficient state management.

## Live Demo

Check out the live version of the website here: [Blogging Website](https://blogging-website-rho-eight.vercel.app/)

## Features

- **View All Blogs**: Fetches and displays a list of all available blogs.
- **Read Blog**: Users can select and read individual blog by their ID.
- **Create New Blogs**: Users can create and submit new blog posts.
- **Loading State**: Displays a skeleton while fetching data from the backend.
- **Update Blogs**: Functionality to update existing blog entries. ( **work is still pending in this feature** )

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Recoil**: State management library for managing and sharing state across components.
- **TypeScript**: For scripting and type safety.
- **Tailwind CSS**: For styling the application.
- **Prisma**: ORM for database management.
- **PostgreSQL**: Database for storing blog data.
- **JWT**: For secure user authentication.
- **Zod**: For validation of data inputs.
- **Cloudflare Workers**: For serverless function deployment.
- **Vercel**: For frontend deployment.

## Installation

To get started with the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Nisrayani13/Blogging-Website.git
   ```
2. Navigate to the backend folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Navigate to the frontend folder and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
4. Create a .env file in the backend folder and add the following:
   ```bash
   DATABASE_URL="your_database_url"
   JWT_PASSWORD="your_jwt_password"
   ```
5. In the wrangler.toml file, add the following under [vars]:
   ```bash
   [vars]
   DATABASE_URL="your_prisma_accelerate_db_url"
   JWT_PASSWORD="your_jwt_password"
   ```
