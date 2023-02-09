import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  result: string = '';

  flipCoin() {
    if (Math.random() < 0.5) {
      this.result = '1 peso';
    } else {
      this.result = '2 pesos';
    }
  }

  render() {
    return html`
      <button @click=${this.flipCoin}>Inserta una moneda!</button>
      <p>Result: ${this.result}</p>
    `;
  }
}