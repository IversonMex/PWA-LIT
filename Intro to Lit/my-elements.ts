import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('name-tag')
export class NameTag extends LitElement {
  @property()
  name: string = 'Hola, ¿Cuál es tu nombre?';

  render() {
    return html`
      <p>Hello, ${this.name}</p>
      <input @input=${this.changeName} placeholder="Ingresa tu nombre">
    `;
  }
  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}