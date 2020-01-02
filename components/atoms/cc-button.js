import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../styles/skeleton';

class CcButton extends LitElement {
  render () {
    return html`
    <button type="button" disabled class="skeleton">
      <slot></slot>
    </button>
    `;
  }

  static get styles () {
    return [
      skeleton,
      css`
      :host {
        box-sizing: border-box;
        display: inline-block;
        margin: 0.2rem;
        vertical-align: top;
      }
      button {
        background: #bbb;
        border: 1px solid #777;
        border-radius: 0.15rem;
        color: transparent;
        font-size: 14px;
        font-family: inherit;
        font-weight: bold;
        display: block;
        margin: 0;
        padding: 0 0.5rem;
        cursor: pointer;
        min-height: 2rem;
        overflow: hidden;
        position: relative;
        text-transform: uppercase;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 100%;
      }
      button:disabled {
        cursor: inherit;
        opacity: .5;
      }
      `,
    ];
  }
}

window.customElements.define('cc-button', CcButton);
