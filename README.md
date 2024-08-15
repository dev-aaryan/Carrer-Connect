# Overview
The Carrer Connect Application is a web-based platform designed to connect job seekers with potential employers. The application provides two roles: Recruiter and User, each with distinct functionalities. Users can search, and apply for various job opportunities, while Recruiter manage job postings and oversee user activities.

## Some Images:
<img src="https://drive.google.com/uc?export=view&id=1M7Jvh2sAhHzaQytZJfCdxiUJqCA2Q3gE"/>
<img src="https://drive.google.com/uc?export=view&id=1bej5cUkqLwsTauXlzIUWIiMAPJ3yPloU" />
<img src="https://drive.google.com/uc?export=view&id=1g5B6XzUXFSqIk-VMJsP1J--h9g7mBbwm" />
<img src="https://drive.google.com/uc?export=view&id=1dhbVmnZNE4WVgwXx2oA9VfRDU9idNdAS" />
<img src="https://drive.google.com/uc?export=view&id=1JrUwF9MrGfx6UJuHV4WWkiKgxpPzvHNa" />

## Table of Contents
- [Features](#Features)
- [Technologies Used](#Technologies-Used)
- [Installation](#Installation)
- [Usage](#Usage)
- [Roles and Permissions](#Roles-and-Permissions)
- [API Endpoints](#API-Endpoints)
- [Contact](#Contact)

## Features
- User Role:
1. Search for jobs based on various filters such as location, job type, and company.
2. Apply for jobs directly through the platform.
3. Create and manage a user profile, including uploading a resume.
4. Track application status.
- Admin Role:
1. Create, update, and delete job postings.
2. View and manage applications submitted by users.
3. Manage user accounts and permissions.
4. Generate reports on job postings and applications.

## Technologies Used
- Frontend:-
1. React.js: A JavaScript library for building user interfaces.
2. Tailwind CSS: A CSS Framework.
3. HTML5, CSS3, Javascript.
- Backend:-
1. Node.js with Express.js framework.
2. MongoDB  for database.
- Authentication & Authorization:-
1. JSON Web Tokens (JWT).
2. BCrypt for password hashing.

## Installation
To run this portfolio locally, follow these steps:

1. Clone the repository: `git clone https://github.com/dev-aaryan/Carrer-Connect.git`
2. Navigate to the project directory: `cd Carrer-Connect`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit: `http://localhost:3000`

## Usage
- User Role
1. Register/Login: Users can register with their email and password. Upon successful registration, they can log in to access the platform.
2. Search Jobs: Users can search for jobs using filters like job title, location, and company.
3. Apply for Jobs: Users can apply for jobs by submitting their resumes and other relevant information.
4. Profile Management: Users can update their profiles, including contact information and resumes.
5. Track Applications: Users can view the status of their job applications.

- Admin Role
1. Dashboard: Admins have access to a dashboard where they can view site statistics, recent job postings, and user activities.
2. Manage Jobs: Admins can create new job postings, update existing ones, or delete jobs no longer available.
3. User Management: Admins can manage user accounts, including banning or promoting users.

# Roles-and-Permissions
1. User: Can search and manage their own job applications and profile.
2. Admin: Has full control over the job postings, user management, and overall site administration.

# API-Endpoints
- User
1. POST /register - Register a new user.
2. POST /login - Login as a user.
3. GET /logout - Logout existing user.
4. POSt /profile/update - Update user profile.
- Company
1. POST /register - Register a new Company.
2. POST /get - Retrieve a list of Company.
3. GET /get/:id - Retrieve details of a specific company by its ID.
4. PUT /update/:id - Update the details of a specific company by its ID.
- Jobs
1. GET /get - Retrieve a list of all job postings.
2. POST /post - Create a new job posting (Admin only).
3. GET /getadminjobs - Retrieve job postings created by the logged-in admin.
4. GET /get/:id - Retrieve details of a specific job posting by its ID.
- Applications
1. GET /apply/:id - Apply for a job.
2. GET /get - Get all applications for a user (or all users if admin).
3. GET /:id/applicants - Retrieve a list of applicants for a specific job posting.
4. GET /status/:id/update - Update the status of an application by its ID.


# Contact
1. Name: Aaryan Gupta
2. Email: aaryanguptaiit@gmail.com
