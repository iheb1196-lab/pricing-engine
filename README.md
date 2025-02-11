# 🚀 Pricing Engine API
Welcome to the **Pricing Engine API**, a TypeScript-based backend service that calculates product prices dynamically based on predefined rules and conditions.

---

## 📌 Features
- ✅ **Product Management** – Create, retrieve, and manage products.
- ✅ **Dynamic Pricing Calculation** – Adjusts final product price based on conditions and operations.
- ✅ **Swagger API Documentation** – Interactive API documentation available at `/api-docs`.
- ✅ **Modular TypeScript Architecture** – Well-structured project with services, controllers, and utilities.

---

## 📁 Project Structure
```
📦 pricing-engine
├── 📂 src
│   ├── 📂 config         # Configuration files (database, Swagger)
│   │   ├── database.ts
│   │   ├── swagger.ts
│   ├── 📂 controllers    # Controllers for handling API requests
│   │   ├── productController.ts
│   ├── 📂 models         # Mongoose models
│   │   ├── Product.ts
│   ├── 📂 routes         # Express route definitions
│   │   ├── productRoutes.ts
│   ├── 📂 services       # Business logic services
│   │   ├── PricingEngine.ts
│   ├── 📂 types          # TypeScript interfaces and types
│   │   ├── Condition.ts
│   │   ├── Operation.ts
│   │   ├── Product.ts
│   │   ├── Rule.ts
│   ├── 📂 utils          # Utility functions
│   │   ├── conditionEvaluator.ts
│   │   ├── operationExecutor.ts
│   ├── server.ts         # Entry point of the application
├── .env                  # Environment variables
├── .gitignore            # Git ignored files
├── package.json          # Node dependencies
├── tsconfig.json         # TypeScript config
└── README.md             # Documentation
```

---

## 📌 Setup & Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/iheb1196-lab/pricing-engine.git
cd pricing-engine
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory:
```sh
Attached in the email

```

### 4️⃣ Start the Application
```sh
npm start
```
> 🚀 The server will start on **[http://localhost:5000](http://localhost:5000)**

---

## 📌 API Documentation
Swagger documentation is available at:  
👉 **[http://localhost:5000/api-docs](http://localhost:5000/api-docs)**

---

## 📌 API Endpoints
### 📦 Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/products/` | Create a new product |
| `GET` | `/products/:id` | Retrieve product details |
| `POST` | `/products/:id/calculate` | Calculate final product price |

---

## 📌 Example API Usage
### 📍 Calculate Product Price
#### ➡️ Endpoint:
`POST http://localhost:5000/products/5/calculate`

#### 📤 Request Body (`req.body`):
```json
{
  "age": 30,
  "membership": "premium",
  "purchaseAmount": 600,
  "loyaltyPoints": 1200,
  "country": "USA",
  "cartValue": 1200,
  "coupon": "SUMMER2024",
  "membershipLevel": "gold"
}
```



---

## 📌 Development Commands
| Command | Description |
|---------|-------------|

| `npm start` | Run Project


---

## 📌 Technologies Used
- **Node.js** (Express.js)
- **TypeScript**
- **MongoDB** (Mongoose)
- **Swagger** (API Documentation)

---



