# ✨ Draggable Notes App

<div align="center">

![Draggable Notes](https://img.shields.io/badge/Draggable-Notes-purple?style=for-the-badge&logo=react)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**A beautiful, interactive note-taking app with drag & drop functionality, dark mode, and smooth animations!**

[Demo](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

</div>

## 📸 Screenshots

<div align="center">

### Light Mode
![Light Mode Screenshot](https://via.placeholder.com/800x400/f5f0ff/1f2937?text=Light+Mode+Screenshot)

### Dark Mode
![Dark Mode Screenshot](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Dark+Mode+Screenshot)

</div>

## ✨ Features

🎯 **Drag & Drop** - Freely move notes anywhere on the canvas  
🌓 **Dark Mode** - Toggle between light and dark themes  
💾 **Local Storage** - All notes persist across sessions  
🚫 **Collision Detection** - Notes automatically avoid overlapping  
🎨 **Animated Bubbles** - Beautiful floating background animations  
📌 **Pin Icon** - Auto-added to every note  
❌ **Easy Delete** - Remove notes with a single click  
⚡ **Smooth Animations** - Gorgeous transitions and hover effects  
📱 **Responsive Design** - Works on all screen sizes  

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/draggable-notes-app.git
cd draggable-notes-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open your browser**
```
http://localhost:3000
```

## 💻 Usage

1. **Add a Note**: Type in the input box and click "Add Note" or press Enter
2. **Drag Notes**: Click and hold any note to drag it around
3. **Delete Notes**: Click the ❌ button on any note to remove it
4. **Toggle Dark Mode**: Click the 🌙/☀️ button in the top right
5. **Auto-Save**: All changes are automatically saved to localStorage

## 🛠️ Tech Stack

<div align="center">

### Languages & Frameworks

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

### Libraries & Tools

![Lucide React](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

</div>

## 📂 Project Structure

```
draggable-notes-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Main component
│   ├── App.css         # Styles
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── package.json
└── README.md
```

## 🎨 Key Features Explained

### Drag & Drop Implementation
- Uses `onMouseDown`, `onMouseMove`, and `onMouseUp` events
- Calculates offset to maintain grip point
- Bounds checking to keep notes within container

### Collision Detection
- Calculates bounding rectangles for each note
- Checks for overlaps with padding
- Automatically repositions overlapping notes

### Dark Mode
- Toggle state saved in localStorage
- Smooth CSS transitions between themes
- Dynamic class switching

### Local Storage
- Auto-saves notes on every change
- Loads saved notes on app mount
- Persists dark mode preference

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

<div align="center">

### **Your Name**

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/your_instagram)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourusername)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourportfolio.com)

</div>

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

## 📞 Contact

Have questions or suggestions? Feel free to reach out!

📧 Email: your.email@example.com  
📱 Instagram: [@your_instagram](https://instagram.com/your_instagram)

<div align="center">

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

**Made with ❤️ and React**

</div>

## 🎯 Roadmap

- [ ] Add note colors customization
- [ ] Implement search functionality
- [ ] Add export/import notes feature
- [ ] Add rich text editor
- [ ] Implement categories/tags
- [ ] Add cloud sync feature
- [ ] Mobile app version

## 📊 Stats

![GitHub Stars](https://img.shields.io/github/stars/yourusername/draggable-notes-app?style=social)
![GitHub Forks](https://img.shields.io/github/forks/yourusername/draggable-notes-app?style=social)
![GitHub Watchers](https://img.shields.io/github/watchers/yourusername/draggable-notes-app?style=social)

---

<div align="center">

### 💖 Thank you for checking out this project!

If you found this helpful, please consider:
- ⭐ Starring the repository
- 🍴 Forking the project
- 📢 Sharing it with others
- 🐛 Reporting bugs
- 💡 Suggesting new features

**Happy Coding! 🚀**

</div>