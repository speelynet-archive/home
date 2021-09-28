const subheadings = [
  "Crust included",
  "The speeliest of nets",
  `Now ${Math.floor(Math.random() * 899 + 101)}% more speely`,
  "It's dot com"
];

class subheading extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = subheadings[Math.floor(Math.random() * subheadings.length)] + "!";
  }
}

window.customElements.define("sub-heading", subheading);
