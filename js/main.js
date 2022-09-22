/*
particlesJS.load('<DOM ELEMENT ID>', '<PATH TO JSON CONFIG>', function () {
	console.log('callback - particles-js config loaded')
});
*/
particlesJS.load('my-particles', 'assets/particlesjs-config.json', () =>
  console.log('Particle JS loaded 👍')
);
