// Função para calcular a contagem regressiva
function updateCountdown() {
    const startDate = new Date('2024-08-02'); // Data inicial
    const now = new Date(); // Data atual

    const diff = now - startDate; // Diferença em milissegundos

    if (diff < 0) {
        document.getElementById('countdown-timer').innerText = ". ❤️";
        return;
    }

    // Calcular dias, horas, minutos e segundos
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(totalDays / 30.44); // Aproximação para meses
    const days = totalDays % 30.44; // Dias restantes
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24); // Horas restantes do dia
    const minutes = Math.floor((diff / (1000 * 60)) % 60); // Minutos restantes
    const seconds = Math.floor((diff / 1000) % 60); // Segundos restantes

    // Atualiza o texto da contagem regressiva
    document.getElementById('countdown-timer').innerText =
        `${months} meses, ${Math.round(days)} dias (${totalDays} dias no total), ${hours} horas, ${minutes} minutos, ${seconds} segundos desde o dia que nos conhecemos ❤️`;
}

// Atualiza a contagem a cada segundo
setInterval(updateCountdown, 1000);

// Chama a função inicialmente
updateCountdown();
