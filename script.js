
// ====== Personalize aqui ======
// Troque pelo seu número com DDI +55 e DDD sem sinais, ex: 5511999999999
const whatsappNumber = "NUMERODAWATSAPPAQUI";
// Mensagem padrão que abre no WhatsApp
function whatsappLink(text){
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${whatsappNumber}?text=${encoded}`;
}

// Hooks dos botões
document.getElementById('whatsappBtn').addEventListener('click', function(e){
    e.preventDefault();
    const sample = 'Quero automatizar: [descreva em 1 frase]';
    window.open(whatsappLink(sample), '_blank');
});
document.getElementById('whatsappInline').addEventListener('click', function(e){
    e.preventDefault();
    const msg = document.getElementById('message').value || 'Quero automatizar: ';
    window.open(whatsappLink(msg), '_blank');
});

// Form submit: abre WhatsApp com mensagem pronta (simples)
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const email = document.getElementById('email').value.trim();
    const text = `${name ? name + ' - ' : ''}${message}${email ? ' | email: ' + email : ''}`;
    window.open(whatsappLink(text), '_blank');
});