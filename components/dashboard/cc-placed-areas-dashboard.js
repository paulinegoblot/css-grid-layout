import { LitElement, html, css } from 'lit-element';

class CcPlacedAreasDashboard extends LitElement {
  render () {
    return html`
      <slot></slot>
    `;
  }

  static get styles () {
    return css`
      :host {
        display: grid;
        grid-gap: 1rem;
      }

      :host(.col-2) {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(4, min-content) 1fr;
      }

      :host(.col-3) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, min-content) 1fr 1fr;
      }

      :host(.col-4) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, min-content) 1fr 1fr;
      }

      ::slotted(*.head) {
        grid-column: 1 / -1;
      }

      ::slotted(*.map) {
        height: auto;
        width: auto;
        min-height: 25rem;
      }

      :host(.col-2) ::slotted(*.map) {
        grid-column: 1 / -1;
      }
      :host(.col-3) ::slotted(*.map) {
        grid-column: 1 / -2;
        grid-row: 3 / -1;
      }
      :host(.col-4) ::slotted(*.map) {
        grid-column: 1 / -2;
        grid-row: 3 / -1;
      }
    `;
  }
}

window.customElements.define('cc-placed-areas-dashboard', CcPlacedAreasDashboard);
