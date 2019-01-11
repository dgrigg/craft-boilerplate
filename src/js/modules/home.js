import $ from "jquery";

export default class Home {
  constructor(element) {
    console.log(element);
    console.log("hello world");
    const $test = $("body");
    $test.attr("style", "color:#ffffff;");
    console.log("another test");
  }
}
