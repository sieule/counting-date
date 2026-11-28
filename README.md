# Counting Date

A simple, interactive date calculator tool that lets you compute the number of days between two dates, find an end date by adding days to a start date, or determine a start date by subtracting days from an end date.

## 🚀 Live Demo

Check out the live demo: [https://sieu.io.vn/github/counting-date](https://sieu.io.vn/github/counting-date)

## ✨ Features

- **Calculate Days Between Dates** – Enter a start date and an end date to get the total number of days
- **Find End Date** – Enter a start date and a number of days to calculate the end date
- **Find Start Date** – Enter an end date and a number of days to calculate the start date
- **Reset Each Field** – Clear individual input fields with the "Reset" button next to each
- **Dark Theme** – Modern, GitHub-inspired dark interface for comfortable use
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices
- **Multi-language Support (VI/EN/JA):** Fully localized in Vietnamese, English, and Japanese with instant, reload-free switching, persistent user preferences (`localStorage`), and embedded translation dictionaries for maximum performance.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Project Structure

```
counting-date/
├── index.html    # Main HTML file
├── style.css     # Stylesheet
├── script.js     # JavaScript functionality
└── README.md     # Project documentation
```


## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/lemasieu/counting-date.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd counting-date
   ```
3. **Open the application**

- Simply open `index.html` in your web browser
- Or use a local development server (e.g., Live Server in VS Code)

## 📝 How It Works

The tool supports three calculation modes:
1. **Start Date + End Date → Days** – Enter both dates and click "Calculate" to get the number of days between them
2. **Start Date + Days → End Date** – Enter a start date and a number of days to find the resulting end date
3. **End Date + Days → Start Date** – Enter an end date and a number of days to find the original start date

Simply fill in any two of the three fields (Start Date, End Date, Days) and click the "Calculate" button. The third field will be automatically computed. <br>
Each input field has its own "Reset" button to clear the value individually.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 🛠️ For Developers (How to add/edit translations)
To add a new language or modify existing text:
1. Open the `script.js` file.
2. Locate the `DEFAULT_TRANSLATIONS` object.
3. Add a new language key (e.g., `fr` for French) and provide the translations for all keys. 
   *Example:*
   ```javascript
   const DEFAULT_TRANSLATIONS = {
     vi: { /* ... */ },
     en: { /* ... */ },
     ja: { /* ... */ },
     // Add new language here:
     fr: {
       page_title: "...",
       // ... other keys
     }
   };
   ```

## 📄 License
This project is open-source and available under the MIT License.
