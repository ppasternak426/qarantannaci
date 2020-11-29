import logo from "./img/logo.png";
import * as PIXI from 'pixi.js';
import ExactValueProvider from "./ExactValueProvider";

const app = new PIXI.Application({resizeTo: document.body});

document.body.appendChild(app.view);

PIXI.Loader.shared.add('logo', logo).load((loader, resources) => {

	const image = new PIXI.Sprite(resources.logo.texture);

	image.x = app.renderer.width / 2;
	image.y = app.renderer.height / 2;

	image.anchor.x = 0.5;
	image.anchor.y = 0.5;

	app.stage.addChild(image);

	const exactValueProvider = new ExactValueProvider();

	app.ticker.add(() => {
		image.rotation -= exactValueProvider.giveMeOneHundredth();
	});
});