let particleSystem = {
    particles: [],
    Particle: function(x, y, dx, dy, color, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.size = size;
        this.timer = 100;
        this.update = function() {
            this.x += this.dx;
            this.y += this.dy;
            this.dy += 0.07;
            this.timer -= 1 + Math.random()/2;
            this.size += Math.random()/3;
        }
        this.draw = function() {
            context.save();
            context.translate(this.x, this.y);
            context.rotate(4*Math.PI*this.timer/100);
            context.globalAlpha = Math.max(0, this.timer / 100);
            context.fillStyle = this.color;
            context.fillRect(-this.size/2, -this.size/2, this.size, this.size);
            context.restore();
            context.globalAlpha = 1;
        }
    },
    makeExplosion: function(x, y, n) {
        for(let i = 0; i < n; i++) {
            let ugul = i*2*Math.PI/n;
            this.particles.push(new this.Particle(
                x,
                y,
                3.5*(0.5 + Math.random())*Math.cos(ugul),
                3.5*(0.5 + Math.random())*Math.random()*Math.sin(ugul),
                "rgb(" + (200 + randomInteger(55)) + ", " + randomInteger(200) + ", " + randomInteger(30) + ")",
                10
            ));
        }
    },
    update: function() {
        this.particles = this.particles.filter(p => {
            return areColliding(0, 0, canvas.width, canvas.height, p.x, p.y, p.size, p.size) || this.timer < 0
        })
        this.particles.forEach(p => {p.update()});
    },
    draw: function() {
        this.particles.forEach(p => {p.draw()});
    }
}    
// Suzdavame promenlivi
let myX, myY;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    kucheX = 0
    kucheY = randomInteger(canvas.height - 100)
    kucheKadurTaimer = 0
    brUpdeti = 0
    duma = "KUHER"
    dumai = 1
    novaduma = ""
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
    brUpdeti++
    if (kucheKadurTaimer > 3) {
        kucheKadurTaimer = 0
    }
    if (brUpdeti == 30) {
        kucheKadurTaimer = kucheKadurTaimer + 1
        brUpdeti = 0
    }
    kucheX = kucheX + 1

    if(duma.length == 0 ) {
        particleSystem.makeExplosion(kucheX, kucheY, 100)
        kucheX=Infinity
        kucheY=Infinity
        duma = Infinity
    }

    particleSystem.update();
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(dogWalk[kucheKadurTaimer], kucheX, kucheY, 100, 60)
    context.font = "50px Courier New"
    context.fillText(duma, kucheX, kucheY - 50)

    particleSystem.draw();
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
    // console.log(duma.charCodeAt(1))
    // console.log((duma.length) - 1)

    particleSystem.makeExplosion(mouseX, mouseY, 100);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key,duma );
    for (dumai = 1; dumai <= duma.length - 1; dumai++) {
        // if(key == duma.charCodeAt(dumai)) {
        novaduma = novaduma + duma[dumai]
        console.log(novaduma)
        
    // }   
    }
    duma = novaduma
    novaduma = ""
    // if(key==75) {
    // duma = duma[1]+duma[2]+duma[3]+duma[4]
    // }
    // if(key==85) {
    // duma = duma[1]+duma[2]+duma[3]
    // }
    // if(key==72) {
    // duma = duma[1]+duma[2]
    // }
    // if(key==69) {
    // duma = duma[1]
    // }
    // if(key==82) {
    // duma = "slei besti" 
    // }
}