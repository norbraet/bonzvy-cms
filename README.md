# Music Online Shop with Payload CMS

This project is a headless music online shop built using Payload CMS, designed to manage beats, licenses, and media files like WAV and MP3. The CMS is paired with a custom Next.js frontend for a seamless user experience, offering browsing, purchasing, and downloading capabilities.

## Features
- Payload CMS: A headless CMS that provides flexible content management.
- MongoDB: A document-based database used for storing music-related content such as beats, licenses, and media files.
- Next.js Frontend: A fast and responsive web interface for users to browse, preview, and purchase beats.
- Docker: The project is containerized, making it easy to run and deploy in different environments.
- Taskfile Automation: Includes automated tasks to simplify database imports/exports and project setup.
- API-First: A flexible and decoupled backend that can be expanded with more features in the future.
  
## Tech Stack
- Payload CMS: For managing content and assets like beats and licenses.
- MongoDB: To store music data, licenses, and metadata.
- Next.js: For building a modern, fast frontend.
- Docker: To containerize the application for easy setup and deployment.
- pnpm: A fast package manager for Node.js to handle dependencies.
- Taskfile: For automating tasks such as database export/imports and setup processes.

## Installation
To set up the project locally, follow these steps:

### 1. Clone the repository
```
git clone https://github.com/norbraet/bonzvy-cms.git
cd bonzvy-cms
```
### 2. Set Up Environment Variables
Create a `.env` file in the root of the project directory and use the `.env.example` as a starting point.

### 3. Build Docker Containers
Run the following task in order to start the setup:
```
task setup
```
This will build the Docker containers and install necessary dependencies.

### 4. Start Docker Containers
Once everything is set up, you can start the Docker containers with:
```
task docker:up
```

### 5. Access the Application
After running the containers, you can access the CMS at:
```
http://localhost:${PAYLOAD_PORT}
```
The port is based on the Variable you set in the `.env`.
