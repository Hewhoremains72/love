document.addEventListener('DOMContentLoaded', () => {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const colors = ['#ff69b4', '#ff1493', '#ff6347', '#ff4500', '#ff8c00'];
    return colors[Math.floor(Math.random() * colors.length)];
}
