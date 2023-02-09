import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import type {TemplateResult} from 'lit';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  friends = ['Iverson', 'Yasif', 'Seabastian'];

  @state()
  pets = [
    { name: "Hedwig", species: "Owl" },
    { name: "Scabbers", species: "Rat" },
    { name: "Crookshanks", species: "Cat" },
  ];

  @state()
  includePets = true;

  render() {
    const listItems: TemplateResult[] = [];
    this.friends.forEach((friend) => {
      listItems.push(html`<li>${friend}</li>`);
    });
    if (this.includePets) {
      this.pets.forEach((pet) => {
        listItems.push(html`<li>${pet.name} (${pet.species})</li>`);
      });
    }

    return html`
      <button @click=${() => this._togglePetVisibility()}>
        ${this.includePets ? 'ver' : 'Ocultar'} sus mascotas
      </button>
      <p>Lista de amigos</p>
      <ul>
        ${listItems}
      </ul>
    `;
  }

  private _togglePetVisibility() {
    this.includePets = !this.includePets;
  }
}