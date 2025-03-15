# BusTravel App Documentation

## 1. Project Overview
**BusTravel** is a web-based application that enables users to search, book, and manage bus tickets efficiently. It provides real-time communication, secure authentication, and seamless payment integration.

### **Key Features:**
- **User Authentication & Authorization** (via Keycloak)
- **Real-time Chatbot & Notifications** (WebSockets)
- **Advanced Search & Filtering**
- **Microservices Architecture**
- **Online Payment Integration** (Paypal)
- **Admin Dashboard for Management**

## 2. Architecture & Tech Stack
### **Tech Stack:**
- **Frontend:** React
- **Backend:** Spring Boot (Microservices)
- **Database:** MySQL & MongoDB
- **Authentication:** Keycloak
- **Real-time Communication:** WebSockets
- **Deployment:** Docker Compose

### **Microservices:**
- **User Service:** Handles authentication and user management.
- **Bus Route Service:** Manages bus routes and schedules.
- **Reservation Service:** Handles ticket reservations.
- **Payment Service:** Integrates online payments.
- **Feedback Service:** Handles feedbacks from users.

## 3. Installation & Deployment
### **Local Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/bustravel.git
   cd bustravel
   ```
2. Start backend services:
   ```bash
   cd to each microservice
   ./gradlew bootRun
   ```
3. Start frontend:
   ```bash
   cd front-end
   npm install
   npm start
   ```

### **Docker Deployment**
1. Build and run using Docker Compose:
   ```bash
   docker-compose up --build
   ```
2. Verify that services are running:
   ```bash
   docker ps
   ```

## 4. User Guide
### **Booking a Ticket:**
1. Register/Login
2. Search for available buses
3. Select a preferred option and confirm booking
4. Complete payment
5. Receive ticket confirmation

## 5. Admin Guide
### **Managing Bus Routes:**
- Add, update, and delete routes via the Admin Dashboard.
- Add, update, and delete locations via the Admin Dashboard.
- Add, update, and delete companies via the Admin Dashboard.
- Add, update, and delete lines via the Admin Dashboard.
- Add, update, and delete itineraries via the Admin Dashboard.

### **Handling Payments:**
- View and manage transactions.

---

### **Contributors**
- **Dielleza Neziri**
- **Albin Abazi**
- **Flake Coti**
- **Fatbardha Sylejmani**

---
