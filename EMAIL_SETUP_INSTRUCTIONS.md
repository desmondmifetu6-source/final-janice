# Email Setup Instructions for Made by Janice Website

This guide will help you set up email functionality so that contact form submissions are automatically sent to your email.

---

## 📧 What Happens When Email is Set Up

When someone submits the contact form on your website:
- ✅ **You receive an email** at `wemodoej@gmail.com` with all the submission details
- ✅ **The customer receives a confirmation email** thanking them for contacting you
- ✅ **The submission is also saved** to `contact-submissions.json` as a backup

---

## 🔐 Step-by-Step Setup Guide

### Step 1: Get a Gmail App Password

1. **Go to your Google Account**
   - Visit: https://myaccount.google.com/
   - Make sure you're signed in with the account: `wemodoej@gmail.com`

2. **Enable 2-Step Verification** (if not already enabled)
   - Click on **Security** in the left sidebar
   - Under "Signing in to Google", click **2-Step Verification**
   - Follow the prompts to enable it (you'll need your phone)

3. **Generate an App Password**
   - Go back to **Security** page
   - Under "2-Step Verification", click **App passwords**
   - You might need to sign in again
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Type: `Website` or `Made by Janice Website`
   - Click **Generate**

4. **Copy the App Password**
   - You'll see a 16-character password like: `abcd efgh ijkl mnop`
   - **Copy this password** (you won't be able to see it again!)
   - It might have spaces - that's okay, we'll remove them

---

### Step 2: Add the Password to Your .env File

1. **Open the .env file**
   - Navigate to: `final_janice\.env`
   - Open it with any text editor (Notepad, VS Code, etc.)

2. **Find this line:**
   ```
   EMAIL_PASS=your-app-password
   ```

3. **Replace it with your App Password:**
   ```
   EMAIL_PASS=abcdefghijklmnop
   ```
   - Remove any spaces from the password
   - Example: If Google gave you `abcd efgh ijkl mnop`, write it as `abcdefghijklmnop`

4. **Save the file**

---

### Step 3: Restart Your Server

1. **Stop the server** (if it's running)
   - In the terminal, press `Ctrl + C`

2. **Start the server again:**
   ```bash
   cd final_janice
   npm start
   ```

3. **Check for success message:**
   - You should see: `✓ Email service configured`
   - If you see: `⚠ Email not configured`, check your .env file again

---

## ✅ Testing the Email Setup

1. **Start your website:**
   ```bash
   cd final_janice
   npm start
   ```

2. **Open your website:**
   - Go to: http://localhost:3000

3. **Submit a test contact form:**
   - Fill out the contact form with test information
   - Click "Send Message"

4. **Check your email:**
   - Check `wemodoej@gmail.com` inbox
   - You should receive an email with the submission details
   - The test email address should also receive a confirmation email

---

## 🔍 Troubleshooting

### Problem: "Email not configured" message
**Solution:**
- Check that `.env` file exists in `final_janice` folder
- Make sure `EMAIL_USER=wemodoej@gmail.com` (no extra spaces)
- Make sure `EMAIL_PASS=` has your actual password (no spaces)
- Restart the server after making changes

### Problem: "Error sending email" in terminal
**Possible causes:**
- App Password is incorrect (generate a new one)
- 2-Step Verification is not enabled
- Wrong email address in `EMAIL_USER`
- Gmail account security settings blocking the login

**Solution:**
- Generate a new App Password and update `.env`
- Make sure 2-Step Verification is enabled
- Check that you're using the App Password, not your regular Gmail password

### Problem: Emails going to spam
**Solution:**
- Check your spam/junk folder
- Mark the email as "Not Spam" so future emails go to inbox

### Problem: Can't find App Passwords option
**Solution:**
- Make sure 2-Step Verification is enabled first
- Try this direct link: https://myaccount.google.com/apppasswords
- If it doesn't work, your account might need to be a personal Gmail account (not a workspace account)

---

## 📝 Current Email Configuration

- **Your Email (receives submissions):** `wemodoej@gmail.com`
- **Email User (sends emails):** `wemodoej@gmail.com`
- **Email Password:** Needs to be added to `.env` file (see Step 2)

---

## 🔒 Security Notes

- **Never share your App Password** with anyone
- **Never commit `.env` file to Git** (it's already in `.gitignore`)
- **The App Password is different from your regular Gmail password** - it's safer to use
- **You can revoke App Passwords** anytime from your Google Account settings

---

## 📞 Need Help?

If you're still having issues:
1. Check the terminal/console for error messages
2. Verify your `.env` file has the correct format
3. Try generating a new App Password
4. Make sure the server is restarted after changing `.env`

---

## 🎉 Once Set Up

After completing these steps, your contact form will automatically:
- Send you an email every time someone contacts you
- Send a confirmation email to the customer
- Save all submissions to `contact-submissions.json` as backup

**You're all set!** 🚀

