# 🚀 How to Start the Made by Janice Website

This guide will help you get the website up and running on your computer.

---

## ✅ Prerequisites (What You Need)

Before starting, make sure you have:

1. **Node.js installed** (version 14 or higher)
   - Check if you have it: Open terminal/command prompt and type: `node --version`
   - If you don't have it, download from: https://nodejs.org/
   - This also installs npm (Node Package Manager)

2. **A code editor** (optional but helpful)
   - VS Code, Notepad++, or any text editor

---

## 📋 Quick Start (3 Steps)

### Step 1: Open Terminal/Command Prompt

- **Windows:** Press `Win + R`, type `cmd` or `powershell`, press Enter
- **Mac:** Press `Cmd + Space`, type `Terminal`, press Enter
- **Linux:** Press `Ctrl + Alt + T`

### Step 2: Navigate to the Project Folder

Navigate to wherever you saved the `final_janice` folder.

**Example (adjust to your location):**
```bash
cd path\to\final_janice
```

**Or if you're in the parent folder:**
```bash
cd final_janice
```

### Step 3: Install Dependencies (First Time Only)

If this is your first time running the website, install the required packages:

```bash
npm install
```

This will take a minute or two. You'll see it downloading packages.

**Note:** You only need to do this once, or if you delete the `node_modules` folder.

---

## 🎯 Starting the Website

### Option A: Normal Start (Recommended)

```bash
npm start
```

You should see:
```
Server is running on port 3000
Visit http://localhost:3000 to view the website
✓ Email service configured
```
(or `⚠ Email not configured` if you haven't set up email yet)

### Option B: Development Mode (Auto-restart on changes)

```bash
npm run dev
```

This automatically restarts the server when you make changes to files.

---

## 🌐 Accessing the Website

Once the server is running:

1. **Open your web browser** (Chrome, Firefox, Edge, etc.)
2. **Go to:** http://localhost:3000
3. **You should see the Made by Janice website!**

---

## 📧 Email Setup (Optional but Recommended)

The website works without email, but to receive contact form submissions via email:

1. **Read the email setup guide:**
   - Open: `EMAIL_SETUP_INSTRUCTIONS.md`
   - Follow the steps to get a Gmail App Password
   - Add it to your `.env` file

2. **After setting up email, restart the server:**
   - Press `Ctrl + C` to stop the server
   - Run `npm start` again

**Without email:** Contact form submissions will be saved to `contact-submissions.json` file and shown in the terminal.

---

## 🛑 Stopping the Website

To stop the server:
- Press `Ctrl + C` in the terminal where the server is running

---

## 🔍 Troubleshooting

### Problem: "npm: command not found" or "node: command not found"

**Solution:** 
- Node.js is not installed
- Download and install from: https://nodejs.org/
- Restart your terminal after installing

### Problem: "Error: Cannot find module 'express'"

**Solution:**
- Dependencies are not installed
- Run: `npm install`
- Wait for it to finish, then try `npm start` again

### Problem: "Error: listen EADDRINUSE: address already in use :::3000"

**Solution:**
- Port 3000 is already in use by another program
- **Option 1:** Stop the other program using port 3000
- **Option 2:** Change the port in `.env` file:
  ```
  PORT=3001
  ```
  Then access the website at: http://localhost:3001

### Problem: Website doesn't load in browser

**Check:**
1. Is the server running? (Look at terminal for "Server is running" message)
2. Did you use the correct URL? (http://localhost:3000)
3. Try a different browser
4. Check if firewall is blocking the connection

### Problem: Contact form not working

**Check:**
1. Open browser DevTools (F12)
2. Go to Console tab - look for errors
3. Go to Network tab - check if `/api/contact` request is failing
4. Check terminal for error messages

---

## 📁 Important Files

- **`server.js`** - Backend server code
- **`index.html`** - Main website page
- **`about-creator.html`** - Creator/about page
- **`.env`** - Email configuration (create this if it doesn't exist)
- **`package.json`** - Project dependencies
- **`contact-submissions.json`** - Saved contact form submissions (created automatically)

---

## 🎨 What the Website Includes

- ✅ Home page with hero section
- ✅ Portfolio gallery with filtering
- ✅ Services section
- ✅ About section
- ✅ Contact form
- ✅ Creator/About page
- ✅ Mobile-responsive design
- ✅ WhatsApp integration
- ✅ Video modal

---

## 📝 First Time Setup Checklist

- [ ] Node.js installed (`node --version` works)
- [ ] Navigated to `final_janice` folder
- [ ] Ran `npm install` (installed dependencies)
- [ ] Created `.env` file (optional - for email)
- [ ] Added email password to `.env` (optional - see EMAIL_SETUP_INSTRUCTIONS.md)
- [ ] Ran `npm start`
- [ ] Opened http://localhost:3000 in browser
- [ ] Website loads successfully! 🎉

---

## 🚀 Quick Commands Reference

```bash
# Navigate to project folder
cd final_janice

# Install dependencies (first time only)
npm install

# Start the website
npm start

# Start in development mode (auto-restart)
npm run dev

# Stop the server
Ctrl + C
```

---

## 💡 Tips

1. **Keep the terminal open** while the server is running
2. **Check the terminal** for any error messages
3. **Contact form submissions** appear in terminal and are saved to `contact-submissions.json`
4. **Email setup is optional** - website works without it
5. **Port 3000** is the default - change it in `.env` if needed

---

## 🎉 You're All Set!

Once you see "Server is running on port 3000" in your terminal, you're good to go!

Open http://localhost:3000 in your browser and enjoy your website! 🚀

---

## 📞 Need Help?

- Check the terminal for error messages
- Read `EMAIL_SETUP_INSTRUCTIONS.md` for email setup
- Check `README.md` for more detailed information
- Verify all files are in the `final_janice` folder

---

**Made with ❤️ for Made by Janice**

