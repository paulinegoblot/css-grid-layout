import { LitElement, html, css } from 'lit-element';

class CcDashboard extends LitElement {
  render () {
    return html`
      <slot></slot>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, min-content) 1fr 1fr;
        background: #BADA55;
      }
      /* .head TILE POSITION/SIZE */
      ::slotted(*.head) {
        grid-column: 1 / -1;
      }
    `;
  }
}

window.customElements.define('cc-dashboard', CcDashboard);
