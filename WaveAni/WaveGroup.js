import Wave from "./Wave.js";

export default class WaveGroup {
	constructor() {
		this.totalWaves = 3;
		this.totalPoints = 6;

		this.color = [
			"rgba(0,199,235,0.4)",
			"rgba(0,146,199,0.4)",
			"rgba(0,87,158,0.4)",
		];

		this.waves = new Array(this.totalWaves)
			.fill(0)
			.map(
				(val, index) => new Wave(index, this.totalPoints, this.color[index])
			);
	}

	resize(stageWidth, stageHeight) {
		this.waves.forEach((wave) => wave.resize(stageWidth, stageHeight));
	}

	draw(ctx) {
		this.waves.forEach((wave) => wave.draw(ctx));
	}
}
