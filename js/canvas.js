document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas-id");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particlesArray = [];





    // let title_h1 = document.querySelector('.a-contact')
    // let titleMeasurments = title_h1.getBoundingClientRect()

    // let title = {
    //     x: titleMeasurments.left,
    //     y: titleMeasurments.top,
    //     width: titleMeasurments.width,
    //     height: 5,
    // }

    class Particles {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.weight = Math.random() * 0.015;
            this.directionX = -1;
            this.color = "rgba(255,255,255,0.2)"

        }

        update() {
            if (this.y > canvas.height) {
                this.y = 0 - this.size;
                this.weight = .05;
                this.x = Math.random() * canvas.width * 1.3;
                this.weight = Math.random() * .05;
                this.color = "rgba(255, 106, 61, 0.4)"

            }
            this.weight += 0.01;
            this.y += this.weight;
            this.x += this.directionX * 0.5;


            // if (
            //     this.x < title.x + title.width &&
            //     this.x + this.size > title.x &&
            //     this.y < title.y + title.height &&
            //     this.y + this.size > title.y
            // ) {
            //     this.y -= 3;
            //     this.weight *= -0.4;
            //     this.color = "rgba(255, 255, 255, 0.8)"
            //     ctx.fillStyle = this.color;
            // }

        }
        draw() {
            ctx.fillStyle = this.color
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath()
            ctx.fill()
        }

    }
    function init() {
        particlesArray = [];
        const numberOfParticles = 80;
        for (let i = 0; i < numberOfParticles; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height
            particlesArray.push(new Particles(x, y))
        }
    }
    init()

    function animate() {
        ctx.fillStyle = 'rgba(0,0,0,0.02)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();

            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distans = Math.sqrt(dx * dx + dy * dy);
                const drawLines = function () {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgba(244, 218, 125, 0.2)";
                    ctx.lineWidth = 1
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                    ctx.stroke();
                    ctx.closePath();

                }
                if (window.innerWidth <= 1200) {
                    if (distans <= 80) {
                        drawLines();
                    }
                } else {
                    if (distans <= 150) {
                        drawLines();
                    }
                }

            }
        }
        requestAnimationFrame(animate)
    }


    animate()
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    })
})