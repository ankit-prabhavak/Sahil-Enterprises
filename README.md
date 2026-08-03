# Sahil Enterprises

Sahil Enterprises is a modern, full-stack e-commerce web platform engineered for small-scale local businesses. It features a complete multi-application architecture containing a user-facing client store, an administrative management dashboard, and a secure RESTful backend service built for scalability and ease of maintenance.

---

## Key Features

* **Storefront (Client)**: Interactive product catalog, category-based filtering, cart management, and seamless checkout interface.
* **Admin Panel**: Dashboard for managing product inventories, processing customer orders, tracking user accounts, and monitoring business operations.
* **RESTful Backend**: Secure API architecture handling authentication, business logic, file management, and database operations.
* **Role-Based Access Control**: Secure user authentication and authorization using JSON Web Tokens (JWT).
* **Responsive Architecture**: Mobile-first design providing optimal viewing across mobile, tablet, and desktop viewports.

---

## Repository Structure

```text
Sahil-Enterprises/
├── Client/       # User-facing e-commerce web application
├── Admin/        # Administrative panel for catalog & order management
└── Server/       # Node.js/Express backend service & API endpoints

```

---

## Tech Stack

### Frontend (Client & Admin)

* **Core Library**: React.js (built with Vite)
* **Routing**: React Router DOM
* **State Management**: React Context API
* **Styling**: Tailwind CSS, Material UI (MUI)
* **Icons**: React Icons

### Backend (Server)

* **Runtime Environment**: Node.js
* **Web Framework**: Express.js
* **Database**: MongoDB (Object Data Modeling via Mongoose)
* **Authentication**: JSON Web Tokens (JWT) & bcrypt
* **File Storage**: Cloudinary / Multer middleware

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

* **Node.js**: v16.0.0 or higher
* **npm** or **yarn**
* **MongoDB**: Local instance or MongoDB Atlas database URI

---

### Installation & Setup

1. **Clone the repository**:
```bash
git clone https://github.com/ankit-prabhavak/Sahil-Enterprises.git
cd Sahil-Enterprises

```


2. **Set up the Backend Server**:
```bash
cd Server
npm install

```


Create a `.env` file in the `Server/` directory and configure your environment variables:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sahil_enterprises
JWT_SECRET=your_jwt_secret_key

```


Start the backend server:
```bash
npm start

```


3. **Set up the Client Application**:
Open a new terminal window:
```bash
cd Client
npm install
npm run dev

```


4. **Set up the Admin Application**:
Open a new terminal window:
```bash
cd Admin
npm install
npm run dev

```
