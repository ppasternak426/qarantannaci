import logo from "./img/logo.png";
import * as PIXI from 'pixi.js';
import ExactValueProvider from "./ExactValueProvider";

const app = new PIXI.Application();

document.body.appendChild(app.view);

PIXI.Loader.shared.add('logo', logo).load((loader, resources) => {

	const bunny = new PIXI.Sprite(resources.logo.texture);

	bunny.x = app.renderer.width / 2;
	bunny.y = app.renderer.height / 2;

	bunny.anchor.x = 0.5;
	bunny.anchor.y = 0.5;

	app.stage.addChild(bunny);

	const exactValueProvider = new ExactValueProvider();

	app.ticker.add(() => {
		bunny.rotation += exactValueProvider.giveMeOneHundredth();
	});
});