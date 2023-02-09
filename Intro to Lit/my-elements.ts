import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  version = 'Completo';

  render() {
    return html`
    <p>Bienvenido!</p>
    <p>Estatus del código: ${this.version}</p>
    `;
  }
}
