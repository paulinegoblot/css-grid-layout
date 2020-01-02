import { LitElement, html, css } from 'lit-element';

class CcDashboard extends LitElement {
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
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, min-content);
        grid-template-areas: 'head head head head' '. . . .' 'map map map map';
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

window.customElements.define('cc-dashboard', CcDashboard);
