// Comprobar preferencia guardada o del sistema al cargar
(function () {
    const savedTheme = localStorage.getItem('escuela-philips-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

// Función para alternar el tema
window.toggleTheme = function () {
    const html = document.documentElement;

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('escuela-philips-theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('escuela-philips-theme', 'dark');
    }

    updateIcons();
};

// Actualizar iconos según el estado actual
function updateIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    const moonIcons = document.querySelectorAll('.icon-moon');
    const sunIcons = document.querySelectorAll('.icon-sun');

    if (isDark) {
        moonIcons.forEach(icon => icon.classList.add('hidden'));
        sunIcons.forEach(icon => icon.classList.remove('hidden'));
    } else {
        moonIcons.forEach(icon => icon.classList.remove('hidden'));
        sunIcons.forEach(icon => icon.classList.add('hidden'));
    }
}

// Ejecutar actualización de iconos al cargar (DOMContentLoad)
document.addEventListener('DOMContentLoaded', () => {
    updateIcons();
    // También actualizar transiciones después de un momento para evitar parpadeos iniciales
    setTimeout(() => {
        document.body.classList.add('transition-colors', 'duration-300');
    }, 100);
});
