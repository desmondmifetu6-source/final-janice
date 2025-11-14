// Creator Portfolio Scripts

// Typing Animation
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing-text');
    const texts = [
        'Initializing portfolio...',
        'Loading skills matrix...',
        'Connecting to server...',
        'Welcome to my digital space!'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeText, typeSpeed);
    }

    if (typingText) {
        typeText();
    }

    // Terminal command typing
    const terminalCommand = document.querySelector('.typing-command');
    const commands = ['ls -la', 'git status', 'npm start', 'python main.py', 'g++ program.cpp'];
    let commandIndex = 0;
    let commandCharIndex = 0;
    let isCommandDeleting = false;

    function typeCommand() {
        if (!terminalCommand) return;
        
        const currentCommand = commands[commandIndex];
        
        if (isCommandDeleting) {
            terminalCommand.textContent = currentCommand.substring(0, commandCharIndex - 1);
            commandCharIndex--;
        } else {
            terminalCommand.textContent = currentCommand.substring(0, commandCharIndex + 1);
            commandCharIndex++;
        }

        let commandSpeed = isCommandDeleting ? 30 : 80;

        if (!isCommandDeleting && commandCharIndex === currentCommand.length) {
            commandSpeed = 2000;
            isCommandDeleting = true;
        } else if (isCommandDeleting && commandCharIndex === 0) {
            isCommandDeleting = false;
            commandIndex = (commandIndex + 1) % commands.length;
        }

        setTimeout(typeCommand, commandSpeed);
    }

    typeCommand();

    // Animated Counter for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(element);
    }

    statNumbers.forEach(animateCounter);

    // Matrix Rain Effect
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");

        const fontSize = 14;
        const columns = canvas.width / fontSize;

        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function drawMatrix() {
            ctx.fillStyle = 'rgba(10, 14, 39, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ffff';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(drawMatrix, 35);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // Card hover effects
    const cards = document.querySelectorAll('.sci-fi-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
        });
        card.addEventListener('mouseleave', function() {
            this.style.animation = 'cardFloat 6s ease-in-out infinite';
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

