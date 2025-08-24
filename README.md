# 🌍 Currency Converter

A simple and responsive **Currency Converter Web App** built with **HTML, CSS, and JavaScript**.  
It uses the **Currency API** for real-time exchange rates and the **Flags API** to display country flags dynamically.  

---

## 🚀 Features
- 💱 Convert currency between different countries in real-time  
- 🏳️ Displays country flags for selected currencies  
- 🔄 Default conversion set to **USD → INR**  
- 🛡️ Fallback API integration to ensure reliability  
- 📱 Responsive and lightweight — works on any modern browser  

---

## 🛠️ Tech Stack
- **HTML5** – Structure  
- **CSS3** – Styling and layout  
- **JavaScript (Vanilla JS)** – Logic and API integration  
- **[Currency API](https://github.com/fawazahmed0/currency-api)** – Exchange rates  
- **[Flags API](https://flagsapi.com/)** – Country flag images  

---

## 📂 Project Structure
currency-converter/
│── index.html # Main UI
│── style.css # Styling
│── app.js # Core logic (API calls, event handling)
│── codes.js # Country list with ISO codes
│── README.md # Project documentation


---

## ⚡ How It Works
1. User enters an amount.  
2. Selects **From Currency** and **To Currency** from dropdowns.  
3. App fetches exchange rates from **Currency API**:  
   - Primary: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1`  
   - Fallback: `https://latest.currency-api.pages.dev/v1`  
4. Conversion result is displayed with correct **currency symbol and country flag**.  


---

## ▶️ Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/Shifana-Ranth/currency-converter.git
2. Open the project folder:
`cd currency-converter`
3. Open index.html in your browser.

Input:  1 USD  
Output: 1 USD = 83.25 INR
