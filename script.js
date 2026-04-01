document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.select-plan');
    const toast = document.getElementById('toastNotification');
    const toastText = document.getElementById('toastText');

    function showToast(message) {
        toastText.innerHTML = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const name = card.getAttribute('data-name');
            const packageId = card.getAttribute('data-package');
            
            let message = "";

            // Frases personalizadas por pacote
            if (packageId === "1") {
                message = "🔥 Boa escolha! 7 vídeos deliciosos te aguardam...";
            } else if (packageId === "2") {
                message = "😈 O melhor custo-benefício! 14 vídeos + brinde liberados.";
            } else {
                message = "🎥 30 minutos só nós dois... Prepare o fôlego!";
            }

            showToast(`✅ <strong>${name}</strong>: ${message}`);

            // Simulação de Redirecionamento
            setTimeout(() => {
                console.log("Redirecionando para o checkout..."); 
                window.location.href = "https://go.tribopay.com.br/7ufrmqzy2g"
            }, 2000);
        });
    });

    // Mensagem de boas-vindas
    setTimeout(() => {
        showToast("💖 Layne Ferraiz está online agora... Venha me ver!");
    }, 1000);
});