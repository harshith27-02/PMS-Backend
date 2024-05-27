# Parking Management Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
The Parking Management Application is designed to help manage parking slots efficiently. It allows users to create, update, delete, and view parking slots, as well as handle various functionalities such as floor and wing management, vehicle parking entry.

## Features
- User authentication (Login and Registration)
- CRUD operations for parking slots
- Floor and wing management
- Vehicle parking entry management
- Slot availability and capacity tracking
- Real-time updates and validations
- Error handling and response management

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/parking-management-app.git
   cd parking-management-app
Install dependencies:

bash
Copy code
npm install
Set up MongoDB:

Ensure MongoDB is running on your machine.
Create a database named parkingDB.
Configure environment variables:

Create a .env file in the root directory and add the following variables:
env

Start the server:
node server.js


Running the Application
Start the server:
node server.js

Open your browser and navigate to:

http://localhost:3000
Access the following pages:

Login: /login.html
Register: /register.html
Dashboard: /index.html (or any other main page you set up)
Parking management: /Parking.html
Example Users
Admin User:
Email: admin@example.com
Password: password123
API Endpoints
User Authentication
Register:

POST /api/users/register
Request body:
json
Copy code
{
  "email": "user@example.com",
  "password": "password123"
}
Login:

POST /api/users/login
Request body:
json
Copy code
{
  "email": "user@example.com",
  "password": "password123"
}
Parking Slots
Get all slots:

GET /api/slots
Create a slot:

POST /api/slots
Request body:
json
Copy code
{
  "floorName": "Ground Floor",
  "wingName": "A",
  "slotName": "A1",
  "vehicleType": "Car",
  "isAvailable": true,
  "capacity": 1
}
Update a slot:

PUT /api/slots/:id
Request body:
json
Copy code
{
  "slotName": "A1",
  "vehicleType": "Car",
  "isAvailable": false,
  "capacity": 1
}
Delete a slot:

DELETE /api/slots/:id
Parking Management
Create a parking entry:

POST /api/parkings
Request body:
json
Copy code
{
  "vehicleNo": "KA01AB1234",
  "category": "Car",
  "rateCode": "CR101",
  "rate": 50,
  "checkIn": "2024-05-27T10:00:00Z",
  "checkOut": "2024-05-27T12:00:00Z",
  "totalHours": 2,
  "totalAmount": 100,
  "paidStatus": "Paid",
  "paymentMode": "Cash"
}
Get all parking entries:

GET /api/parkings
Technologies Used
Backend:

Node.js
Express.js
MongoDB
Mongoose
Frontend:

HTML
CSS
JavaScript
Bootstrap
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or inquiries, please contact:


This README file should now cover all the functionalities including user authentication, CRUD operations for parking slots, parking entry management, and rate management, based on the files you provided.





