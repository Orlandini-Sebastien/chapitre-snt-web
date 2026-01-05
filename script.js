const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

let width, height, particles;

function init() {
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;

	particles = [];
	for (let i = 0; i < 5; i++) {
		particles.push({
			x: Math.random() * width,
			y: Math.random() * height,
			vx: (Math.random() - 0.5) * 2,
			vy: (Math.random() - 0.5) * 2,
			size: Math.random() * 300 + 200,
			color: i % 2 === 0 ? '#6c5ce7' : '#00f2fe',
		});
	}
}

function animate() {
	ctx.clearRect(0, 0, width, height);

	particles.forEach((p) => {
		p.x += p.vx;
		p.y += p.vy;

		if (p.x < -p.size) p.x = width + p.size;
		if (p.y < -p.size) p.y = height + p.size;
		if (p.x > width + p.size) p.x = -p.size;
		if (p.y > height + p.size) p.y = -p.size;

		ctx.beginPath();
		ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
		ctx.fillStyle = p.color;
		ctx.fill();
	});

	requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();

// Animation d'entrée pour les cartes
const cards = document.querySelectorAll('.session-card');
cards.forEach((card, index) => {
	card.style.opacity = '0';
	card.style.transform = 'translateY(30px)';
	setTimeout(() => {
		card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
		card.style.opacity = '1';
		card.style.transform = 'translateY(0)';
	}, 100 * index);
});
