# 🔗 URL Shortener

A fast and scalable **URL Shortener API** built using Node.js, Express, and MongoDB.
This project allows users to convert long URLs into short, shareable links and track visit analytics.

---

## 🚀 Features

* 🔗 Shorten long URLs instantly
* 📊 Track click analytics (visit history with timestamps)
* ⚡ Fast redirection system
* 🗂️ Clean RESTful API structure
* 🔒 Secure environment configuration using dotenv

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

---

## 📌 API Endpoints

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| POST   | /url                    | Create short URL         |
| GET    | /url/:shortId           | Redirect to original URL |
| GET    | /url/analytics/:shortId | Get analytics data       |

---

## ⚙️ How It Works

1. User sends a long URL to the server
2. Server generates a unique short ID
3. Short URL is created and stored in database
4. When accessed, it redirects to the original URL
5. Each visit is recorded for analytics

---

## 🧑‍💻 Installation & Setup

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
DB_NAME=urlshortner
```

---

## 📁 Project Structure

```
├── models/
├── routes/
├── controllers/
├── connect.js
├── server.js
└── .env
```

---

## 📈 Future Enhancements

* 🔐 User Authentication (JWT)
* ✏️ Custom short URLs
* 📊 Advanced analytics dashboard
* 📱 Frontend UI (React)
* 🔳 QR code generation

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
