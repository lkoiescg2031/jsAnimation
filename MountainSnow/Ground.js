export default class Ground {
	constructor(stageWidth, stageHeight) {
		this.stageWidth = stageWidth;
		this.stageHeight = stageHeight;
		this.color = "#ffffff";
	}

	draw(ctx) {
		const y = (this.stageHeight / 7) * 6;
		const dx = this.stageWidth / 3;
		const dy = this.stageHeight / 5;
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.moveTo(0, y);
		ctx.bezierCurveTo(
			dx,
			y - dy,
			this.stageWidth - dx,
			y - dy,
			this.stageWidth,
			y
		);
		ctx.lineTo(this.stageWidth, this.stageHeight);
		ctx.lineTo(0, this.stageHeight);
		ctx.fill();
		ctx.closePath();
	}
}
