export class Component {
  constructor() {}

  render(): HTMLElement {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Hello, World!</h1>';
    return element;
  }
}

