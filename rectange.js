class Rectangle {
    constructor(_width, _height) {
        this.width = _width;
        this.height = _height;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }

    getArea() {
        return this.width * this.height;
    }

    getRandomHex() {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        return `rgb(${red},${green},${blue})`
    }
}
function createRect() {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    let rect = new Rectangle(width, height);
    let color = rect.getRandomHex();
    ctx.beginPath();
    ctx.rect(2, 2, rect.width, rect.height);
    ctx.fillStyle = color;
    ctx.fill();
    result.innerHTML = 'Perimeter: ' + rect.getPerimeter() + '<br>' + 'Area: ' + rect.getArea();
}