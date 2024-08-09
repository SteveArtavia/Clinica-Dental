let agendarCitaBtns = document.querySelectorAll('.agendar-cita');

const agendarCita = () => {
    let phone = '+50688353224';
    let message = 'Hola%20me%20gustaria%20agendar%20una%20cita';
    let url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
};

agendarCitaBtns.forEach(button => {
    button.addEventListener('click', agendarCita);
});