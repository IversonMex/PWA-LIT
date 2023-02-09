import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('more-expressions')
export class MoreExpressions extends LitElement {
  @property()
  checked: boolean = false;

  render() {
    return html`
      <div>
        <input type="text" ?disabled=${!this.checked} value="Hola, ¿Cuál es tu nombre?">
      </div>
      <label><input type="checkbox" @change=${this.setChecked}>Checklist</label>
      <label><input type="checkbox" @change=${this.setChecked}>Checklist</label>
    `;
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }
}