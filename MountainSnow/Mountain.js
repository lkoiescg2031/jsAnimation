export default class Mountain {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
	}

	draw(ctx) {
		const stageWidth = document.body.clientWidth;
		const stageHeight = document.body.clientHeight;

		const degree = 120;
		const radian = (Math.abs(degree / 2 - 90) * Math.PI) / 180;

		const leftY = Math.tan(radian) * this.x;
		const rightY = Math.tan(radian) * (stageWidth - this.x);

		//draw
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(0, this.y + leftY);
		ctx.lineTo(0, stageHeight);
		ctx.lineTo(stageWidth, stageHeight);
		ctx.lineTo(stageWidth, this.y + rightY);
		ctx.lineTo(this.x, this.y);
		ctx.fill();
		ctx.closePath();
	}
}
