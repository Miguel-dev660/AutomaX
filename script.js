// ====== Personalize aqui ======
// Troque pelo seu número com DDI +55 e DDD sem sinais, ex: 5511999999999
const whatsappNumber = "5512988872980";

// M: Evento de carregamento da página - remove loading overlay
window.addEventListener('load', function() {/* M: Listener para evento de load da página */
    const loadingOverlay = document.getElementById('loadingOverlay');/* M: Seleciona elemento do loading overlay */
    setTimeout(() => {/* M: Aguarda 500ms antes de remover */
        loadingOverlay.classList.add('hidden');/* M: Adiciona classe hidden para fade out */
    }, 500);/* M: Delay de 500 milissegundos */
});/* M: Fim do listener de load */

// Mensagem padrão que abre no WhatsApp
function whatsappLink(text) {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${whatsappNumber}?text=${encoded}`;
}

// M: ===== SCROLL TO TOP BUTTON - Mostra/esconde botão ao rolar =====
const scrollToTopBtn = document.getElementById('scrollToTop');/* M: Seleciona botão de scroll to top */

window.addEventListener('scroll', function() {/* M: Listener para evento de scroll */
    if (window.pageYOffset > 300) {/* M: Se rolou mais de 300px */
        scrollToTopBtn.classList.add('visible');/* M: Torna botão visível */
    } else {/* M: Se está no topo */
        scrollToTopBtn.classList.remove('visible');/* M: Esconde botão */
    }/* M: Fim do if */
});/* M: Fim do listener de scroll */

scrollToTopBtn.addEventListener('click', function() {/* M: Listener para clique no botão */
    window.scrollTo({/* M: Rola a janela */
        top: 0,/* M: Para o topo (posição 0) */
        behavior: 'smooth'/* M: Com animação suave */
    });/* M: Fim do scrollTo */
});/* M: Fim do listener de clique */

// M: ===== SMOOTH SCROLL PARA ÂNCORAS - Scroll suave ao clicar em links internos =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {/* M: Seleciona todos links que começam com # */
    anchor.addEventListener('click', function (e) {/* M: Adiciona listener de clique */
        const href = this.getAttribute('href');/* M: Pega o valor do href */
        if (href === '#' || href === '') return;/* M: Ignora se href vazio */
        /* M: Continua se href válido */
        e.preventDefault();/* M: Previne comportamento padrão do link */
        const target = document.querySelector(href);/* M: Seleciona elemento alvo */
        if (target) {/* M: Se elemento existe */
            target.scrollIntoView({/* M: Rola até o elemento */
                behavior: 'smooth',/* M: Com animação suave */
                block: 'start'/* M: Alinha ao início */
            });/* M: Fim do scrollIntoView */
        }/* M: Fim do if target */
    });/* M: Fim do listener */
});/* M: Fim do forEach */

// M: ===== VIDEO PLACEHOLDERS - Substitui placeholder por vídeo ao clicar =====
document.querySelectorAll('.video-placeholder').forEach(placeholder => {/* M: Seleciona todos placeholders de vídeo */
    placeholder.addEventListener('click', function() {/* M: Adiciona listener de clique */
        const card = this.closest('.card');/* M: Encontra card pai */
        const video = card.querySelector('video');/* M: Encontra elemento video */
        /* M: Continua com lógica */
        if (video) {/* M: Se vídeo existe */
            this.style.display = 'none';/* M: Esconde placeholder */
            video.style.display = 'block';/* M: Mostra vídeo */
            video.play();/* M: Inicia reprodução do vídeo */
        }/* M: Fim do if */
    });/* M: Fim do listener */
});/* M: Fim do forEach */

// M: ===== FAQ ACCORDION - Abre/fecha perguntas do FAQ =====
document.querySelectorAll('.faq-question').forEach(question => {/* M: Seleciona todos botões de pergunta do FAQ */
    question.addEventListener('click', function() {/* M: Adiciona listener de clique */
        const answer = this.nextElementSibling;/* M: Seleciona próximo elemento (resposta) */
        const isExpanded = this.getAttribute('aria-expanded') === 'true';/* M: Verifica se está expandido */
        /* M: Continua com lógica de toggle */
        // M: Fecha todas as outras FAQs abertas
        document.querySelectorAll('.faq-question').forEach(q => {/* M: Para cada pergunta */
            if (q !== this) {/* M: Se não for a pergunta clicada */
                q.setAttribute('aria-expanded', 'false');/* M: Marca como não expandida */
                q.nextElementSibling.classList.remove('active');/* M: Remove classe active da resposta */
            }/* M: Fim do if */
        });/* M: Fim do forEach */
        /* M: Fim do loop */
        // M: Toggle na FAQ clicada (abre se fechada, fecha se aberta)
        this.setAttribute('aria-expanded', !isExpanded);/* M: Inverte estado de aria-expanded */
        answer.classList.toggle('active');/* M: Toggle classe active na resposta */
    });/* M: Fim do listener */
});/* M: Fim do forEach */

// M: ===== VALIDAÇÃO DO FORMULÁRIO - Valida campos em tempo real =====
const contactForm = document.getElementById('contactForm');/* M: Seleciona formulário de contato */
const nameInput = document.getElementById('name');/* M: Seleciona input de nome */
const emailInput = document.getElementById('email');/* M: Seleciona input de email */
const messageInput = document.getElementById('message');/* M: Seleciona textarea de mensagem */
const nameError = document.getElementById('nameError');/* M: Seleciona span de erro do nome */
const emailError = document.getElementById('emailError');/* M: Seleciona span de erro do email */
const messageError = document.getElementById('messageError');/* M: Seleciona span de erro da mensagem */
const formSuccess = document.getElementById('formSuccess');/* M: Seleciona div de mensagem de sucesso */

// M: Função que valida campo de nome
function validateName() {/* M: Função de validação do nome */
    const value = nameInput.value.trim();/* M: Pega valor do input removendo espaços */
    if (value.length === 0) {/* M: Se vazio */
        nameError.textContent = 'Nome é obrigatório';/* M: Define mensagem de erro */
        nameError.classList.add('show');/* M: Mostra mensagem */
        nameInput.classList.add('error');/* M: Adiciona classe de erro no input */
        return false;/* M: Retorna false (inválido) */
    } else if (value.length < 2) {/* M: Se muito curto */
        nameError.textContent = 'Nome deve ter pelo menos 2 caracteres';/* M: Define mensagem de erro */
        nameError.classList.add('show');/* M: Mostra mensagem */
        nameInput.classList.add('error');/* M: Adiciona classe de erro */
        return false;/* M: Retorna false (inválido) */
    } else {/* M: Se válido */
        nameError.textContent = '';/* M: Limpa mensagem de erro */
        nameError.classList.remove('show');/* M: Esconde mensagem */
        nameInput.classList.remove('error');/* M: Remove classe de erro */
        return true;/* M: Retorna true (válido) */
    }/* M: Fim do if/else */
}/* M: Fim da função validateName */

// M: Função que valida campo de email
function validateEmail() {/* M: Função de validação do email */
    const value = emailInput.value.trim();/* M: Pega valor removendo espaços */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;/* M: Regex para validar formato de email */
    /* M: Continua validação */
    if (value.length > 0 && !emailRegex.test(value)) {/* M: Se preenchido mas inválido */
        emailError.textContent = 'E-mail inválido';/* M: Define mensagem de erro */
        emailError.classList.add('show');/* M: Mostra mensagem */
        emailInput.classList.add('error');/* M: Adiciona classe de erro */
        return false;/* M: Retorna false (inválido) */
    } else {/* M: Se vazio (opcional) ou válido */
        emailError.textContent = '';/* M: Limpa mensagem */
        emailError.classList.remove('show');/* M: Esconde mensagem */
        emailInput.classList.remove('error');/* M: Remove classe de erro */
        return true;/* M: Retorna true (válido) */
    }/* M: Fim do if/else */
}/* M: Fim da função validateEmail */

// M: Função que valida campo de mensagem
function validateMessage() {/* M: Função de validação da mensagem */
    const value = messageInput.value.trim();/* M: Pega valor removendo espaços */
    if (value.length === 0) {/* M: Se vazio */
        messageError.textContent = 'Mensagem é obrigatória';/* M: Define mensagem de erro */
        messageError.classList.add('show');/* M: Mostra mensagem */
        messageInput.classList.add('error');/* M: Adiciona classe de erro */
        return false;/* M: Retorna false (inválido) */
    } else if (value.length < 10) {/* M: Se muito curta */
        messageError.textContent = 'Mensagem deve ter pelo menos 10 caracteres';/* M: Define mensagem de erro */
        messageError.classList.add('show');/* M: Mostra mensagem */
        messageInput.classList.add('error');/* M: Adiciona classe de erro */
        return false;/* M: Retorna false (inválido) */
    } else {/* M: Se válida */
        messageError.textContent = '';/* M: Limpa mensagem */
        messageError.classList.remove('show');/* M: Esconde mensagem */
        messageInput.classList.remove('error');/* M: Remove classe de erro */
        return true;/* M: Retorna true (válido) */
    }/* M: Fim do if/else */
}/* M: Fim da função validateMessage */

// M: Eventos de validação em tempo real (blur = quando sai do campo)
nameInput.addEventListener('blur', validateName);/* M: Valida ao sair do campo nome */
nameInput.addEventListener('input', function() {/* M: Valida ao digitar no nome */
    if (this.value.length > 0) validateName();/* M: Só valida se tiver conteúdo */
});/* M: Fim do listener input */

emailInput.addEventListener('blur', validateEmail);/* M: Valida ao sair do campo email */
emailInput.addEventListener('input', function() {/* M: Valida ao digitar no email */
    if (this.value.length > 0) validateEmail();/* M: Só valida se tiver conteúdo */
});/* M: Fim do listener input */

messageInput.addEventListener('blur', validateMessage);/* M: Valida ao sair do campo mensagem */
messageInput.addEventListener('input', function() {/* M: Valida ao digitar na mensagem */
    if (this.value.length > 0) validateMessage();/* M: Só valida se tiver conteúdo */
});/* M: Fim do listener input */

// Hooks dos botões
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

// M: Submit do formulário - valida e envia
document.getElementById('contactForm').addEventListener('submit', function(e) {/* M: Listener para submit do formulário */
    e.preventDefault();/* M: Previne envio padrão do formulário */
    /* M: Valida todos os campos antes de enviar */
    const isNameValid = validateName();/* M: Valida nome */
    const isEmailValid = validateEmail();/* M: Valida email */
    const isMessageValid = validateMessage();/* M: Valida mensagem */
    /* M: Continua se todos válidos */
    if (!isNameValid || !isEmailValid || !isMessageValid) {/* M: Se algum campo inválido */
        return;/* M: Para execução */
    }/* M: Fim da validação */
    /* M: Todos válidos, continua */
    // M: Adiciona estado de loading no botão
    const submitBtn = this.querySelector('button[type="submit"]');/* M: Seleciona botão submit */
    submitBtn.classList.add('loading');/* M: Adiciona classe loading */
    submitBtn.disabled = true;/* M: Desabilita botão */
    /* M: Simula processamento */
    // M: Simula envio (em produção, aqui faria chamada de API)
    setTimeout(() => {/* M: Aguarda 1 segundo simulando envio */
        const name = document.getElementById('name').value.trim();/* M: Pega nome */
        const message = document.getElementById('message').value.trim();/* M: Pega mensagem */
        const email = document.getElementById('email').value.trim();/* M: Pega email */
        const text = `${name ? name + ' - ' : ''}${message}${email ? ' | email: ' + email : ''}`;/* M: Monta texto completo */
        /* M: Continua após montar texto */
        // M: Mostra mensagem de sucesso
        formSuccess.style.display = 'block';/* M: Exibe mensagem de sucesso */
        /* M: Remove loading state */
        // M: Remove estado de loading do botão
        submitBtn.classList.remove('loading');/* M: Remove classe loading */
        submitBtn.disabled = false;/* M: Reabilita botão */
        /* M: Abre WhatsApp */
        // M: Abre WhatsApp com mensagem formatada
        window.open(whatsappLink(text), '_blank');/* M: Abre WhatsApp em nova aba */
        /* M: Limpa formulário após delay */
        // M: Limpa formulário após 2 segundos
        setTimeout(() => {/* M: Aguarda 2 segundos */
            contactForm.reset();/* M: Reseta todos campos do formulário */
            formSuccess.style.display = 'none';/* M: Esconde mensagem de sucesso */
        }, 2000);/* M: Delay de 2000 milissegundos */
    }, 1000);/* M: Delay de 1000 milissegundos para simular processamento */
});/* M: Fim do listener de submit */

// M: ===== INTERSECTION OBSERVER PARA ANIMAÇÕES - Anima elementos ao entrarem na viewport =====
const observerOptions = {/* M: Opções do observer */
    threshold: 0.1,/* M: Trigger quando 10% do elemento está visível */
    rootMargin: '0px 0px -100px 0px'/* M: Margem de -100px no bottom (trigger antes) */
};/* M: Fim das opções */

const observer = new IntersectionObserver(function(entries) {/* M: Cria observer */
    entries.forEach(entry => {/* M: Para cada elemento observado */
        if (entry.isIntersecting) {/* M: Se entrou na viewport */
            entry.target.style.opacity = '1';/* M: Torna visível */
            entry.target.style.transform = 'translateY(0)';/* M: Move para posição original */
        }/* M: Fim do if */
    });/* M: Fim do forEach */
}, observerOptions);/* M: Passa opções para observer */

// M: Observa elementos para animação ao entrar na tela
document.querySelectorAll('.metric-card, .testimonial-card, .faq-item').forEach(el => {/* M: Seleciona cards para animar */
    el.style.opacity = '0';/* M: Inicia invisível */
    el.style.transform = 'translateY(30px)';/* M: Inicia 30px abaixo */
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';/* M: Define transição suave */
    observer.observe(el);/* M: Adiciona elemento ao observer */
});/* M: Fim do forEach */

// M: ===== ANALYTICS TRACKING - Rastreamento de eventos (opcional) =====
// M: Função genérica para rastrear eventos (integrar com Google Analytics)
function trackEvent(category, action, label) {/* M: Função de tracking de eventos */
    // M: Integração com Google Analytics (se gtag disponível)
    if (typeof gtag !== 'undefined') {/* M: Se Google Analytics está carregado */
        gtag('event', action, {/* M: Envia evento para GA */
            'event_category': category,/* M: Categoria do evento */
            'event_label': label/* M: Label do evento */
        });/* M: Fim do gtag */
    }/* M: Fim do if */
    console.log(`Event tracked: ${category} - ${action} - ${label}`);/* M: Log no console */
}/* M: Fim da função trackEvent */

// M: Rastreia cliques em todos os CTAs (botões de ação)
document.querySelectorAll('[data-testid*="cta"]').forEach(btn => {/* M: Seleciona todos elementos com data-testid que contém 'cta' */
    btn.addEventListener('click', function() {/* M: Adiciona listener de clique */
        trackEvent('CTA', 'click', this.getAttribute('data-testid'));/* M: Rastreia clique no CTA */
    });/* M: Fim do listener */
});/* M: Fim do forEach */

// M: Rastreia reprodução de vídeos
document.querySelectorAll('video').forEach(video => {/* M: Seleciona todos elementos de vídeo */
    video.addEventListener('play', function() {/* M: Adiciona listener para evento play */
        const card = this.closest('.card');/* M: Encontra card pai */
        const title = card ? card.querySelector('h3').textContent : 'Unknown';/* M: Pega título do card */
        trackEvent('Video', 'play', title);/* M: Rastreia reprodução do vídeo */
    });/* M: Fim do listener */
});/* M: Fim do forEach */

// M: ===== EASTER EGG - KONAMI CODE - Código secreto =====
let konamiCode = [];/* M: Array para armazenar teclas pressionadas */
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];/* M: Padrão do Konami Code */

document.addEventListener('keydown', function(e) {/* M: Listener para tecla pressionada */
    konamiCode.push(e.key);/* M: Adiciona tecla ao array */
    konamiCode = konamiCode.slice(-10);/* M: Mantém apenas últimas 10 teclas */
    /* M: Verifica se padrão foi digitado */
    if (konamiCode.join(',') === konamiPattern.join(',')) {/* M: Se padrão completo foi digitado */
        document.body.style.animation = 'pulse 1s ease-in-out 3';/* M: Aplica animação de pulsação 3 vezes */
        alert('🎉 Easter egg encontrado! Você desbloqueou 10% de desconto! Use o código: AUTOMAX10');/* M: Mostra alerta com código de desconto */
        konamiCode = [];/* M: Reseta array */
    }/* M: Fim do if */
});/* M: Fim do listener */

// M: ===== PREVENÇÃO DE SPAM NO FORMULÁRIO - Limita envios =====
let lastSubmitTime = 0;/* M: Timestamp do último envio */
const minSubmitInterval = 5000; // M: Intervalo mínimo entre envios (5 segundos)

contactForm.addEventListener('submit', function(e) {/* M: Listener adicional para prevenção de spam */
    const now = Date.now();/* M: Timestamp atual */
    if (now - lastSubmitTime < minSubmitInterval) {/* M: Se enviou há menos de 5 segundos */
        e.preventDefault();/* M: Previne envio */
        alert('Por favor, aguarde alguns segundos antes de enviar novamente.');/* M: Mostra alerta */
        return false;/* M: Para execução */
    }/* M: Fim do if */
    lastSubmitTime = now;/* M: Atualiza timestamp do último envio */
}, true);/* M: useCapture = true para executar antes */

// M: ===== LOG DE DESEMPENHO - Performance stats no console (desenvolvimento) =====
if (window.performance && console.table) {/* M: Se API de performance está disponível */
    window.addEventListener('load', function() {/* M: Listener para load */
        setTimeout(() => {/* M: Aguarda um pouco */
            const perfData = window.performance.timing;/* M: Dados de performance */
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;/* M: Calcula tempo total de carregamento */
            const connectTime = perfData.responseEnd - perfData.requestStart;/* M: Calcula tempo de conexão */
            const renderTime = perfData.domComplete - perfData.domLoading;/* M: Calcula tempo de renderização */
            /* M: Exibe estatísticas no console */
            console.log('%c⚡ AutoMax Performance Stats', 'background: #e11b23; color: white; padding: 5px 10px; border-radius: 3px; font-weight: bold;');/* M: Log estilizado com título */
            console.table({/* M: Exibe tabela de performance */
                'Tempo total de carregamento': `${pageLoadTime}ms`,/* M: Tempo total */
                'Tempo de conexão': `${connectTime}ms`,/* M: Tempo de conexão */
                'Tempo de renderização': `${renderTime}ms`/* M: Tempo de renderização */
            });/* M: Fim da tabela */
        }, 0);/* M: Executa imediatamente após load */
    });/* M: Fim do listener */
}/* M: Fim do if */

// M: ===== CONSOLE MESSAGE - Mensagem personalizada no console =====
console.log('%cAutoMax 🤖', 'font-size: 24px; font-weight: bold; color: #e11b23;');/* M: Logo estilizado no console */
console.log('%cSite desenvolvido com melhorias completas!', 'font-size: 14px; color: #bfc4c8;');/* M: Mensagem principal */
console.log('%c✨ Features: Animações, Validação, FAQ, Depoimentos, Métricas e muito mais!', 'font-size: 12px; color: #4ade80;');/* M: Lista de features */
console.log('%cContato: WhatsApp +55 12 98887-2980', 'font-size: 12px; color: #bfc4c8;');/* M: Informação de contato */
