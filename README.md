# FuelFlow ⛽

FuelFlow is a modern fuel station management system designed to turn petrol pump operations into a smooth, data-driven experience. Built to help owners, managers, and staff work together with confidence, FuelFlow brings station monitoring, daily reporting, and financial insight into one polished web app.

## ✨ What FuelFlow Does

- Helps station owners manage multiple locations from one dashboard
- Lets workers submit daily sales reports, attach bill images, and track performance
- Provides real-time earnings summary, gross income insights, and station-level analytics
- Assigns team members to stations and keeps operations transparent

## 🚀 Who It's For

- Petro station owners who want a digital command center
- Managers who need a quick view of daily performance
- Workers who need a simple reporting workflow and centralized record keeping

## 🌟 Core Features

- **Role-Based Dashboards**: Owners and workers each get tailored interfaces.
- **Station Management**: Add, edit, and organize stations with ease.
- **Daily Sales Tracking**: Enter daily totals, attach bill photos, and keep records in one place.
- **Visual Insights**: Earnings charts and dashboards make data easy to understand.
- **Secure Access**: Authentication powered by JWT and a clean user flow.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Recharts, Framer Motion
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT-based login and session flow
- **Image Storage**: Cloudinary for bill uploads

## 💻 Local Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/Ashu28705/Fuel-Flow.git
   cd Fuel-Flow
   ```
2. Start the backend:
   ```bash
   cd server
   npm install
   copy .env.example .env
   # Edit .env with your MongoDB URI, JWT secret, and Cloudinary keys
   npm run dev
   ```
3. Start the frontend:
   ```bash
   cd ..\client
   npm install
   copy .env.example .env
   # Edit .env with the frontend environment settings if needed
   npm run dev
   ```
4. Open the frontend URL shown in the terminal and begin exploring FuelFlow.

## 📦 Deployment Notes

- The `client` folder is ready for deployment on Vercel or similar static app hosts.
- The `server` folder can be deployed on platforms like Render, Railway, or any Node-friendly host.
- Make sure to add environment variables for MongoDB, JWT secrets, and Cloudinary when deploying.

## 🤝 Contributing
Want to contribute or improve FuelFlow? Check `CONTRIBUTING.md` for guidelines on issues, pull requests, and development workflow.

## 📄 License
FuelFlow is available under the MIT License.
