Frontend – Modular Blue-Green Pricing Page
📌 Overview

This frontend is a React + Vite + Tailwind application that consumes the /pricing API from the backend.
It demonstrates how a pricing page can dynamically reflect different versions of pricing data (blue or green) served by the backend, without any client-side toggling logic.

🎯 Objective

Fetch pricing data from the backend’s /pricing endpoint.

Display the pricing plans, features, and prices exactly as received.

Keep the UI modular, responsive, and reusable.

Make it easy to scale by adding or modifying components/config.

🗂️ Project Structure
frontend/
 ├── src/
 │   ├── components/        # UI components
 │   │   ├── Header.jsx
 │   │   ├── Footer.jsx
 │   │   ├── PricingCard.jsx
 │   │   ├── PricingPage.jsx
 │   │   └── AdminPanel.jsx
 │   ├── config/            # Config files (e.g., routing rules)
 │   │   └── routingConfig.js
 │   ├── data/              # JSON data (blue/green pricing for dev/test)
 │   │   ├── bluePricing.js
 │   │   └── greenPricing.js
 │   ├── assets/            # Icons/images
 │   │   └── react.svg
 │   ├── App.jsx            # Main app component
 │   ├── main.jsx           # Entry point
 │   └── index.css          # Global styles
 ├── vite.config.js
 ├── tailwind.config.js
 ├── postcss.config.js
 └── package.json
