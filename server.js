const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Email configuration (you'll need to set up your email service)
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, company, service, message } = req.body;
        
        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Name, email, and message are required' 
            });
        }
        
        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: 'wemodoej@gmail.com', // Janice's email
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                <p><strong>Service:</strong> ${service || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr>
                <p><em>This message was sent from the Made by Janice website contact form.</em></p>
            `
        };
        
        // Send email
        await transporter.sendMail(mailOptions);
        
        // Send confirmation email to client
        const confirmationMailOptions = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: email,
            subject: 'Thank you for contacting Made by Janice!',
            html: `
                <h2>Thank you for reaching out!</h2>
                <p>Hi ${name},</p>
                <p>Thank you for your interest in my logo design services. I've received your message and will get back to you within 24 hours.</p>
                <p>In the meantime, feel free to check out my portfolio and learn more about my services.</p>
                <p>Best regards,<br>Janice</p>
                <hr>
                <p><em>Made by Janice - Custom Logo Design</em></p>
            `
        };
        
        await transporter.sendMail(confirmationMailOptions);
        
        res.json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });
        
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again later.' 
        });
    }
});

// Portfolio data endpoint
app.get('/api/portfolio', (req, res) => {
    const portfolioItems = [
        {
            id: 1,
            title: 'Corporate Identity',
            category: 'business',
            description: 'Professional business logo design',
            image: '/images/portfolio1.jpg',
            client: 'TechCorp Inc.'
        },
        {
            id: 2,
            title: 'Art Studio',
            category: 'creative',
            description: 'Creative and artistic logo design',
            image: '/images/portfolio2.jpg',
            client: 'Creative Studio'
        },
        {
            id: 3,
            title: 'Tech Startup',
            category: 'tech',
            description: 'Modern technology company logo',
            image: '/images/portfolio3.jpg',
            client: 'InnovateTech'
        },
        {
            id: 4,
            title: 'Retail Brand',
            category: 'business',
            description: 'E-commerce store logo design',
            image: '/images/portfolio4.jpg',
            client: 'ShopEasy'
        },
        {
            id: 5,
            title: 'Music Label',
            category: 'creative',
            description: 'Dynamic music industry logo',
            image: '/images/portfolio5.jpg',
            client: 'SoundWave Records'
        },
        {
            id: 6,
            title: 'Mobile App',
            category: 'tech',
            description: 'Clean and modern app logo',
            image: '/images/portfolio6.jpg',
            client: 'AppFlow'
        }
    ];
    
    res.json(portfolioItems);
});

// Services data endpoint
app.get('/api/services', (req, res) => {
    const services = [
        {
            id: 1,
            title: 'Logo Design',
            description: 'Custom logo designs created from scratch, tailored to your brand identity and vision.',
            price: 'Starting at $299',
            features: ['3 initial concepts', 'Unlimited revisions', 'Multiple file formats', 'Brand guidelines']
        },
        {
            id: 2,
            title: 'Brand Identity',
            description: 'Complete brand packages including color schemes, typography, and style guidelines.',
            price: 'Starting at $599',
            features: ['Logo design', 'Color palette', 'Typography selection', 'Brand guidelines', 'Business card design']
        },
        {
            id: 3,
            title: 'Logo Redesign',
            description: 'Refresh your existing logo while maintaining brand recognition.',
            price: 'Starting at $199',
            features: ['Current logo analysis', '3 new concepts', 'Unlimited revisions', 'Multiple file formats']
        },
        {
            id: 4,
            title: 'Consultation',
            description: 'Expert advice on your brand strategy and design direction.',
            price: '$99/hour',
            features: ['Brand strategy session', 'Design recommendations', 'Competitor analysis', 'Action plan']
        }
    ];
    
    res.json(services);
});

// Testimonials endpoint
app.get('/api/testimonials', (req, res) => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            company: 'TechStart Inc.',
            text: 'Janice created an amazing logo for our startup. Her attention to detail and understanding of our brand was incredible.',
            rating: 5
        },
        {
            id: 2,
            name: 'Mike Chen',
            company: 'Creative Agency',
            text: 'Working with Janice was a pleasure. She delivered exactly what we needed and exceeded our expectations.',
            rating: 5
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            company: 'Local Bakery',
            text: 'Janice helped us create a logo that perfectly represents our brand. Highly recommended!',
            rating: 5
        }
    ];
    
    res.json(testimonials);
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Something went wrong!' 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        success: false, 
        message: 'Route not found' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view the website`);
});

module.exports = app;
