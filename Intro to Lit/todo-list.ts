import {LitElement, html} from 'lit';
import {customElement, state, query} from 'lit/decorators.js';

@customElement('todo-list')
export class ToDoList extends LitElement {
  @state()
  private _listItems = [
    { text: 'Nombre', completed: true },
    { text: 'Apellido', completed: false }
  ];

  render() {
    return html`
      <h2>Lista</h2>
      <ul>
        ${this._listItems.map((item) =>
          html`<li>${item.text}</li>`)}
      </ul>
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Enviar</button>
    `;
  }

  @query('#newitem')
  input!: HTMLInputElement;

  addToDo() {
    this._listItems = [...this._listItems,
        {text: this.input.value, completed: false}];
    this.input.value = '';
  }
}