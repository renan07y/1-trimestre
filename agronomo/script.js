document.addEventListener('DOMContentLoaded', () => {

    // Efeito de rolagem suave para os links do menu
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animação de "fade-in" ao rolar a página
    const sections = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // A seção será visível quando 20% dela estiver na tela
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Funcionalidade do formulário de contato (apenas demonstração)
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        contactStatus.textContent = 'Enviando...';
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // AQUI VOCÊ FARIA A CHAMADA PARA UMA API DE ENVIO DE EMAIL
        // Por exemplo, usando a API Fetch para enviar os dados a um backend.
        // Abaixo, um exemplo simulado
        
        try {
            // Simulando o envio de dados
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            contactStatus.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
            contactForm.reset();
        } catch (error) {
            contactStatus.textContent = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.';
        }
    });

});