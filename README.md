# Heyrazzi

Heyrazzi is a platform similar to Upwork but specifically designed for photographers. It allows photographers to showcase their work, connect with potential clients, and get hired for projects.

## 🚀 Features
- 📸 Photographers can create profiles and upload portfolios
- 💼 Clients can post job requests and hire photographers
- 🗂 Job listings with bidding system
- 🔥 Real-time chat between photographers and clients
- 📍 Location-based search for finding nearby professionals
- 📊 Reviews and ratings for credibility

## 🛠 Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, ShadCN/UI
- **Backend**: Firebase (Firestore, Authentication, Storage)

## 📦 Installation
Ensure you have **Node.js** installed. Then, follow these steps:

```sh
# Clone the repository
git clone https://github.com/yourusername/heyrazzi.git
cd heyrazzi

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔧 Configuration
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add a Web App and retrieve your **Firebase config**.
3. Create a `.env` file in the root directory and add:

```sh
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🏗 Project Structure
```
heyrazzi/
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Main pages (Home, Profile, Job Listings, etc.)
│   ├── firebase.js   # Firebase configuration
│   ├── App.js        # Main App component
│   └── index.css     # Global styles
├── public/           # Static assets
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```

## 🛠️ Contributing
Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-new-feature
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push to your fork and create a pull request.

## 📜 License
This project is licensed under the MIT License.

---

🚀 **Heyrazzi** is built to empower photographers worldwide. Let's make it amazing together!

