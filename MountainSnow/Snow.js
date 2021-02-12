export default class Snow {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = "#ffffff";
	}

	draw(ctx) {
		const gradient = ctx.createRadialGradient(
			this.x,
			this.y,
			(this.r / 7) * 6,
			this.x,
			this.y,
			this.y / 7
		);

		gradient.addColorStop(0, "#FFFFFF00");
		gradient.addColorStop(1, "#FFFFFFEE");

		ctx.beginPath();
		ctx.fillStyle = gradient;
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.closePath();
	}
}
