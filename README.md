# 🏭 Web-Dashboard-Simulation-for-3D-Printers

## 🔍 Overview
This is a **3D Printer Dashboard Simulation** that visually represents the printer’s status, including **extruder temperature, heater bed temperature, and Pi temperature**. The UI also includes a real-time **temperature graph** 📊 and essential **control buttons** 🎛️ for printer operations.

OUTPUT:
![image](https://github.com/user-attachments/assets/f24631c1-52ff-4afd-816c-e8cb893005fa)

## 🛠️ Setup Instructions

1. **Clone the repository** 🖥️
   ```sh
   git clone https://github.com/yourusername/3d-printer-dashboard.git
   ```
2. **Navigate to the project folder** 📂
   ```sh
   cd 3d-printer-dashboard
   ```
3. **Open the project in a browser** 🌐
   - If using VS Code, install the **Live Server** extension and start the server.
   - Alternatively, open `index.html` directly in a modern web browser.

## 🎨 Design Decisions & Assumptions

- **Dark Theme UI 🖤**: A black background with colored elements for better visibility.
- **Button Layout 🎮**: The control buttons are placed on the right side for easy access.
- **Real-Time Temperature Updates 🔥**: The extruder and bed temperatures update every 2 seconds.

## 🏗️ Challenges Faced & Solutions

### ⚠️ 1. Graph Moving Unexpectedly
**Issue:** The graph was shifting and resizing unpredictably.
**Solution:** Applied CSS constraints to keep the graph fixed in position while dynamically updating temperature values.

### 🔄 2. Infinite Loop in Temperature Updates
**Issue:** Data kept adding without limit, causing memory issues.
**Solution:** Implemented a **queue-like structure**, ensuring the graph maintains a fixed number of data points.

### 📱 3. Responsive UI Design
**Issue:** UI elements were misaligned on smaller screens.
**Solution:** Used **flexbox** and **CSS media queries** to maintain a consistent layout across devices.

## 🚀 Future Improvements
- 📡 **Integrate with real 3D printer API** for actual temperature readings.
- 🎭 **Add theme customization** (light/dark mode switch).
- 📈 **Enhance graph styling** for better clarity.

## 🏗️ Built With
- **HTML5** 🏗️
- **CSS3** 🎨 (Flexbox, Grid, Dark Mode)
- **JavaScript** 💡 (Chart.js for graph visualization)

---
💡 *Feel free to contribute and improve this project!* ✨
