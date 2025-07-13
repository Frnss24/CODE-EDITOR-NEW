# 🚀 Live Code Editor

Live Code Editor adalah aplikasi web yang memungkinkan Anda mengedit HTML, CSS, dan JavaScript secara real-time dengan preview langsung. Aplikasi ini dibangun menggunakan React dan Monaco Editor untuk pengalaman coding yang optimal.

## ✨ Fitur

- **Editor Multi-Bahasa**: Mendukung HTML, CSS, dan JavaScript dengan syntax highlighting
- **Live Preview**: Melihat hasil kode secara real-time tanpa refresh
- **Layout Responsif**: Tampilan yang optimal di desktop dan mobile
- **UI Modern**: Interface yang menarik dengan gradient dan glassmorphism effect
- **Auto-save**: Kode tersimpan otomatis saat mengetik

## 🛠️ Teknologi yang Digunakan

- **React 19.1.0** - Framework JavaScript
- **Monaco Editor** - Code editor yang powerful
- **CSS3** - Styling modern dengan gradient dan animasi
- **HTML5** - Struktur aplikasi

## 📦 Instalasi

### Prerequisites
Pastikan Anda telah menginstall:
- [Node.js](https://nodejs.org/) (versi 14 atau lebih baru)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

### Clone Repository
```bash
git clone https://github.com/Frnss24/CODE-EDITOR-NEW.git
cd CODE-EDITOR-NEW
```

### Install Dependencies
```bash
npm install
```

### Jalankan Aplikasi
```bash
npm start
```

Aplikasi akan terbuka di browser Anda di `http://localhost:3000`

## 🎯 Cara Menggunakan

### 1. Memulai Coding
- Buka aplikasi di browser
- Anda akan melihat tiga editor: HTML, CSS, dan JavaScript
- Live preview akan muncul di bagian bawah

### 2. Menulis HTML
```html
<h1>Hello World!</h1>
<p>Ini adalah paragraf pertama saya</p>
<div id="container">
  <button onclick="showMessage()">Klik Saya</button>
</div>
```

### 3. Styling dengan CSS
```css
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-align: center;
  padding: 20px;
}

button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #ff5252;
  transform: scale(1.05);
}
```

### 4. Menambahkan JavaScript
```javascript
function showMessage() {
  alert('Hello dari JavaScript!');
}

// Menambahkan elemen dinamis
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');
  if (container) {
    const newElement = document.createElement('p');
    newElement.textContent = 'Elemen ini dibuat dengan JavaScript!';
    container.appendChild(newElement);
  }
});
```

### 5. Melihat Hasil
- Setiap perubahan yang Anda buat akan langsung terlihat di live preview
- Gunakan tombol "🔄 Refresh Preview" jika preview tidak update otomatis

## 📱 Responsive Design

Aplikasi ini responsif dan dapat digunakan di berbagai ukuran layar:
- **Desktop**: Tiga editor sejajar dengan preview di bawah
- **Tablet**: Editor tersusun vertikal dengan preview di bawah
- **Mobile**: Layout yang dioptimalkan untuk layar kecil

## 🔧 Scripts yang Tersedia

```bash
# Menjalankan aplikasi dalam mode development
npm start

# Build aplikasi untuk production
npm run build

# Menjalankan test
npm test

# Eject dari Create React App (tidak dapat dibatalkan)
npm run eject
```

## 📁 Struktur Proyek

```
CODE-EDITOR-NEW/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Komponen utama
│   ├── App.css         # Styling utama
│   ├── index.js        # Entry point
│   └── index.css       # Global styling
├── package.json
└── README.md
```

## 🤝 Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 Lisensi

Proyek ini open source dan tersedia di bawah lisensi MIT.

## 👨‍💻 Author

**Franzzz Sinaga**
- GitHub: [@Frnss24](https://github.com/Frnss24)

## 🙏 Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Code editor yang powerful
- [React](https://reactjs.org/) - Framework JavaScript
- [Create React App](https://create-react-app.dev/) - Build tool

---

⭐ Jika proyek ini membantu Anda, jangan lupa untuk memberikan star di repository ini!
