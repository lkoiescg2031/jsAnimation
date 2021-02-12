import Ground from "./Ground.js";
import MountainGroup from "./MountainGroup.js";
import Snow from "./snow.js";

class App {
	constructor() {
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		document.body.appendChild(this.canvas);

		this.resize();
		window.addEventListener("resize", this.resize.bind(this), false);
	}

	draw(ctx) {
		ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
		//backgruond
		const gradient = ctx.createLinearGradient(0, 0, 0, this.stageHeight);
		gradient.addColorStop(0, "#1B2025");
		gradient.addColorStop(1, "#51616F");

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);

		const mountains = new MountainGroup(this.stageWidth, this.stageHeight);
		const ground = new Ground(this.stageWidth, this.stageHeight);

		const snow = new Snow(100, 100, 50);

		mountains.draw(ctx);
		ground.draw(ctx);
		snow.draw(ctx);
	}

	resize() {
		// stage ReSize
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;
		// for retina
		const ratio = window.devicePixelRatio;
		this.canvas.width = this.stageWidth * ratio;
		this.canvas.height = this.stageHeight * ratio;
		this.ctx.scale(ratio, ratio);
		//draw
		this.draw(this.ctx);
	}
}

window.onload = () => {
	new App();
};
