import WaveGroup from "./WaveGroup.js";

class App {
	constructor() {
		this.resize = this.resize.bind(this);
		this.animate = this.animate.bind(this);

		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		document.body.appendChild(this.canvas);

		this.waveGroup = new WaveGroup();

		window.addEventListener("resize", this.resize, false);
		this.resize();

		window.requestAnimationFrame(this.animate);
	}

	resize() {
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;

		// for retina
		this.canvas.width = this.stageWidth * 2;
		this.canvas.height = this.stageHeight * 2;
		this.ctx.scale(2, 2);

		this.waveGroup.resize(this.stageWidth, this.stageHeight);
	}

	animate(t) {
		this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

		this.waveGroup.draw(this.ctx);

		window.requestAnimationFrame(this.animate);
	}
}

window.onload = () => {
	new App();
};
