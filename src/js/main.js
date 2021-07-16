import "alpinejs";

window.Alpine = Alpine;

// setup for AlpineJs
window.projects = component;

Alpine.data("component", component);
Alpine.start();

export default class Main {
  constructor() {}

  // Run all initialization things
  init() {}
}

const main = new Main();
main.init();
