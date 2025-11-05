# Made by Janice - Website Setup Guide

## Overview
This is a full-stack website for Made by Janice, a custom logo design service. The website features a modern, responsive design with interactive elements and a backend API for handling contact form submissions.

## Features
- 🎨 Modern, responsive design
- 📱 Mobile-friendly interface
- 🚀 Interactive animations and effects
- 📧 Contact form with email notifications
- 🖼️ Portfolio gallery with filtering
- ⚡ Fast loading and optimized performance
- 🔧 Easy to customize and maintain

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **Styling**: Custom CSS with modern design patterns
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)
- An email account for sending contact form emails

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3000
```

**Note**: For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in EMAIL_PASS

### 3. Run the Application

#### Development Mode (with auto-restart)
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

### 4. Access the Website
Open your browser and visit: `http://localhost:3000`

## Project Structure
```
made-by-janice-website/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # Frontend JavaScript
├── server.js           # Backend server
├── package.json        # Dependencies and scripts
├── README.md           # This file
└── .env                # Environment variables (create this)
```

## API Endpoints

### Contact Form
- **POST** `/api/contact`
- Sends contact form submissions via email
- Returns success/error response

### Portfolio Data
- **GET** `/api/portfolio`
- Returns portfolio items with categories

### Services Data
- **GET** `/api/services`
- Returns available services and pricing

### Testimonials
- **GET** `/api/testimonials`
- Returns client testimonials

## Customization

### Colors
The main brand color is `#6366f1` (indigo). To change colors, update the CSS variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #fbbf24;
}
```

### Content
- Update contact information in `index.html`
- Modify services and portfolio items in `server.js`
- Change email addresses in the contact form handler

### Images
Replace placeholder images in the portfolio section with actual logo designs:
1. Add images to an `images/` folder
2. Update image paths in the portfolio data

## Deployment

### Heroku
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Git:
```bash
git add .
git commit -m "Initial commit"
git push heroku main
```

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Set environment variables in Vercel dashboard

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up serverless functions for the API endpoints

## Email Setup

### Gmail Configuration
1. Enable 2-Factor Authentication
2. Go to Google Account settings
3. Generate an App Password
4. Use the App Password in your `.env` file

### Other Email Services
Update the transporter configuration in `server.js`:

```javascript
const transporter = nodemailer.createTransporter({
    service: 'outlook', // or 'yahoo', 'hotmail', etc.
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
```

## Troubleshooting

### Common Issues

1. **Email not sending**
   - Check email credentials in `.env`
   - Verify App Password is correct
   - Check spam folder

2. **Port already in use**
   - Change PORT in `.env` file
   - Kill process using the port: `lsof -ti:3000 | xargs kill`

3. **Dependencies not installing**
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

## Support
For questions or issues, contact:
- Email: hello@madebyjanice.com
- Website: https://madebyjanice.com

## License
MIT License - feel free to use and modify as needed.

---

**Made with ❤️ by Janice**
