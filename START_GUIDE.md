# How to Start the Website

## Quick Start Guide

### Step 1: Install Dependencies (if needed)
If you haven't installed dependencies yet, run:
```bash
npm install
```

### Step 2: Set Up Environment Variables (Optional)
The website can run without email configuration, but to enable the contact form email functionality:

1. Create a `.env` file in the root directory (copy from `env.example`):
   ```bash
   # Copy the example file
   # On Windows PowerShell:
   Copy-Item env.example .env
   
   # On Windows CMD:
   copy env.example .env
   
   # On Mac/Linux:
   cp env.example .env
   ```

2. Edit `.env` file and add your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3000
   ```

   **Note:** For Gmail, you'll need to generate an "App Password" (not your regular password):
   - Go to Google Account Settings
   - Security → 2-Step Verification → App Passwords
   - Generate a new app password for "Mail"

### Step 3: Start the Server

#### Option A: Development Mode (with auto-reload)
```bash
npm run dev
```
This uses `nodemon` to automatically restart the server when you make changes.

#### Option B: Production Mode
```bash
npm start
```
This runs the server normally.

### Step 4: Access the Website
Once the server starts, you should see:
```
Server is running on port 3000
Visit http://localhost:3000 to view the website
```

Open your browser and go to: **http://localhost:3000**

---

## Checking for Errors

### 1. Check the Terminal/Console
When you start the server, watch for:
- ✅ **Success message:** `Server is running on port 3000`
- ❌ **Errors:** Any red text or error messages

### 2. Common Errors and Solutions

#### Error: Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::3000
```
**Solution:** 
- Change the port in `.env` file: `PORT=3001`
- Or stop the process using port 3000:
  ```bash
  # Windows: Find and kill process
  netstat -ano | findstr :3000
  taskkill /PID <PID_NUMBER> /F
  
  # Mac/Linux:
  lsof -ti:3000 | xargs kill
  ```

#### Error: Module Not Found
```
Error: Cannot find module 'express'
```
**Solution:** Run `npm install` to install dependencies

#### Error: Email Configuration Issues
If the contact form doesn't send emails:
- Check that `.env` file exists and has correct email credentials
- Verify your email app password is correct
- The website will still work, but form submissions won't send emails

### 3. Check Browser Console
1. Open the website in your browser (http://localhost:3000)
2. Press `F12` (or right-click → Inspect)
3. Go to the **Console** tab
4. Look for any red error messages

### 4. Check Network Tab
1. In browser DevTools, go to **Network** tab
2. Reload the page (F5)
3. Look for any failed requests (red status codes like 404, 500)
4. Click on failed requests to see error details

### 5. Test the Contact Form
1. Fill out the contact form on the website
2. Submit it
3. Check the terminal for any error messages
4. If email is configured, check your inbox for the confirmation email

### 6. Check Server Logs
All server errors are logged in the terminal where you started the server. Watch for:
- Database connection errors (if using one)
- Email sending errors
- API endpoint errors

---

## Testing Checklist

- [ ] Server starts without errors
- [ ] Website loads at http://localhost:3000
- [ ] No console errors in browser DevTools
- [ ] Navigation menu works (especially mobile menu)
- [ ] Contact form submits (check terminal for errors)
- [ ] Mobile responsive design works (test on phone or resize browser)
- [ ] All images and icons load correctly
- [ ] Smooth scrolling works when clicking navigation links

---

## Stopping the Server

Press `Ctrl + C` in the terminal where the server is running.

---

## Troubleshooting

### Website doesn't load
1. Make sure server is running (check terminal)
2. Check the port number matches the URL
3. Try a different browser
4. Clear browser cache

### Changes not showing
1. Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. If using `npm start`, restart the server
4. If using `npm run dev`, nodemon should auto-reload

### Contact form not working
1. Check browser console for JavaScript errors
2. Check server terminal for API errors
3. Verify the `/api/contact` endpoint is accessible
4. Test with browser DevTools Network tab open

---

## Need Help?

If you encounter any errors, check:
1. Terminal output (server-side errors)
2. Browser Console (client-side errors)
3. Network tab (API/request errors)

