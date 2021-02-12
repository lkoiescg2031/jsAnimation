import Mountain from "./Mountain.js";

export default class MountainGroup {
	constructor(stageWidth, stageHeight) {
		const mountainInfo = [
			{ x: stageWidth / 2, y: stageHeight / 4, color: "#3A4249" },
			{
				x: stageWidth / 4,
				y: stageHeight / 3,
				color: "#282F38",
			},
			{
				x: (stageWidth / 4) * 3,
				y: stageHeight / 3,
				color: "#282F38",
			},
			{
				x: stageWidth / 5,
				y: stageHeight / 2,
				color: "#1E242B",
			},
			{
				x: stageWidth / 2,
				y: (stageHeight / 7) * 3,
				color: "#1E242B",
			},
			{
				x: (stageWidth / 5) * 4,
				y: stageHeight / 2,
				color: "#1E242B",
			},
		];

		this.mountains = mountainInfo.map(
			(ele) => new Mountain(ele.x, ele.y, ele.color)
		);
	}
	draw(ctx) {
		this.mountains.forEach((mountain) => mountain.draw(ctx));
	}
}
