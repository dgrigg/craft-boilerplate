import Alpine from "alpinejs";

import component from "./modules/component";

window.Alpine = Alpine;

// setup for AlpineJs
Alpine.data("component", component);
Alpine.start();

export default class Main {
  constructor() {}

  // Run all initialization things
  init() {}
}

const main = new Main();
main.init();
