

const whatsappNumber = "5512988872980";


window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
    }, 500);
});


function whatsappLink(text) {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${whatsappNumber}?text=${encoded}`;
}


const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.querySelectorAll('.video-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        const card = this.closest('.card');
        const video = card.querySelector('video');
        
        if (video) {
            this.style.display = 'none';
            video.style.display = 'block';
            video.play();
        }
    });
});


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        
        document.querySelectorAll('.faq-question').forEach(q => {
            if (q !== this) {
                q.setAttribute('aria-expanded', 'false');
                q.nextElementSibling.classList.remove('active');
            }
        });
        
        
        this.setAttribute('aria-expanded', !isExpanded);
        answer.classList.toggle('active');
    });
});


const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');


function validateName() {
    const value = nameInput.value.trim();
    if (value.length === 0) {
        nameError.textContent = 'Nome é obrigatório';
        nameError.classList.add('show');
        nameInput.classList.add('error');
        return false;
    } else if (value.length < 2) {
        nameError.textContent = 'Nome deve ter pelo menos 2 caracteres';
        nameError.classList.add('show');
        nameInput.classList.add('error');
        return false;
    } else {
        nameError.textContent = '';
        nameError.classList.remove('show');
        nameInput.classList.remove('error');
        return true;
    }
}


function validateEmail() {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (value.length > 0 && !emailRegex.test(value)) {
        emailError.textContent = 'E-mail inválido';
        emailError.classList.add('show');
        emailInput.classList.add('error');
        return false;
    } else {
        emailError.textContent = '';
        emailError.classList.remove('show');
        emailInput.classList.remove('error');
        return true;
    }
}


function validateMessage() {
    const value = messageInput.value.trim();
    if (value.length === 0) {
        messageError.textContent = 'Mensagem é obrigatória';
        messageError.classList.add('show');
        messageInput.classList.add('error');
        return false;
    } else if (value.length < 10) {
        messageError.textContent = 'Mensagem deve ter pelo menos 10 caracteres';
        messageError.classList.add('show');
        messageInput.classList.add('error');
        return false;
    } else {
        messageError.textContent = '';
        messageError.classList.remove('show');
        messageInput.classList.remove('error');
        return true;
    }
}


nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('input', function() {
    if (this.value.length > 0) validateName();
});

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', function() {
    if (this.value.length > 0) validateEmail();
});

messageInput.addEventListener('blur', validateMessage);
messageInput.addEventListener('input', function() {
    if (this.value.length > 0) validateMessage();
});


document.getElementById('whatsappBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const sample = 'Quero automatizar: [descreva em 1 frase]';
    window.open(whatsappLink(sample), '_blank');
});

document.getElementById('whatsappInline').addEventListener('click', function(e) {
    e.preventDefault();
    const msg = document.getElementById('message').value || 'Quero automatizar: ';
    window.open(whatsappLink(msg), '_blank');
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    if (!isNameValid || !isEmailValid || !isMessageValid) {
        return;
    }
    
    
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    
    setTimeout(() => {
        const name = document.getElementById('name').value.trim();
        const message = document.getElementById('message').value.trim();
        const email = document.getElementById('email').value.trim();
        const text = `${name ? name + ' - ' : ''}${message}${email ? ' | email: ' + email : ''}`;
        
        
        formSuccess.style.display = 'block';
        
        
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        
        window.open(whatsappLink(text), '_blank');
        
        
        setTimeout(() => {
            contactForm.reset();
            formSuccess.style.display = 'none';
        }, 2000);
    }, 1000);
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.querySelectorAll('.metric-card, .testimonial-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});



function trackEvent(category, action, label) {
    
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}


document.querySelectorAll('[data-testid*="cta"]').forEach(btn => {
    btn.addEventListener('click', function() {
        trackEvent('CTA', 'click', this.getAttribute('data-testid'));
    });
});


document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', function() {
        const card = this.closest('.card');
        const title = card ? card.querySelector('h3').textContent : 'Unknown';
        trackEvent('Video', 'play', title);
    });
});


let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'pulse 1s ease-in-out 3';
        alert('🎉 Easter egg encontrado! Você desbloqueou 10% de desconto! Use o código: AUTOMAX10');
        konamiCode = [];
    }
});


let lastSubmitTime = 0;
const minSubmitInterval = 5000; 

contactForm.addEventListener('submit', function(e) {
    const now = Date.now();
    if (now - lastSubmitTime < minSubmitInterval) {
        e.preventDefault();
        alert('Por favor, aguarde alguns segundos antes de enviar novamente.');
        return false;
    }
    lastSubmitTime = now;
}, true);


if (window.performance && console.table) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;
            
            console.log('%c⚡ AutoMax Performance Stats', 'background: #e11b23; color: white; padding: 5px 10px; border-radius: 3px; font-weight: bold;');
            console.table({
                'Tempo total de carregamento': `${pageLoadTime}ms`,
                'Tempo de conexão': `${connectTime}ms`,
                'Tempo de renderização': `${renderTime}ms`
            });
        }, 0);
    });
}


console.log('%cAutoMax 🤖', 'font-size: 24px; font-weight: bold; color: #e11b23;');
console.log('%cSite desenvolvido com melhorias completas!', 'font-size: 14px; color: #bfc4c8;');
console.log('%c✨ Features: Animações, Validação, FAQ, Depoimentos, Métricas e muito mais!', 'font-size: 12px; color: #4ade80;');
console.log('%cContato: WhatsApp +55 12 98887-2980', 'font-size: 12px; color: #bfc4c8;');
