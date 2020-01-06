import { LitElement, html, css } from 'lit-element';

class CcNamedAreasDashboard extends LitElement {
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
          grid-template-areas: 'head head ' '. . ' '. .' '. .' 'map map';
      }

      :host(.col-3) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, min-content) 1fr 1fr;
        grid-template-areas: 'head head head' '. . .' 'map map .' 'map map .' 'map map .';
      }

      :host(.col-4) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, min-content) 1fr 1fr;
        grid-template-areas: 'head head head head' '. . . .' 'map map map .' 'map map map .';
      }

      ::slotted(*.head) {
        grid-area: head;
      }

      ::slotted(*.map) {
        grid-area: map;
        height: auto;
        width: auto;
        min-height: 25rem;
      }
    `;
  }
}

window.customElements.define('cc-named-areas-dashboard', CcNamedAreasDashboard);
