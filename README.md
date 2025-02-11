📖 Pricing Engine API
Welcome to the Pricing Engine API, a TypeScript-based backend service that calculates product prices dynamically based on predefined rules and conditions.

🚀 Features
✅ Product Management – Create, retrieve, and manage products.
✅ Dynamic Pricing Calculation – Adjusts final product price based on conditions and operations.
✅ Swagger API Documentation – Interactive API documentation at /api-docs.
✅ Modular TypeScript Architecture – Well-structured project with services, controllers, and utilities.

📁 Project Structure

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
📌 Setup & Installation
1️⃣ Clone the Repository

git clone https://github.com/your-repo/pricing-engine.git
cd pricing-engine
2️⃣ Install Dependencies

npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory 
4️⃣ Start the Application

npm run dev
Runs the server in development mode on http://localhost:5000

📌 API Documentation
Swagger documentation is available at:
👉 http://localhost:5000/api-docs



