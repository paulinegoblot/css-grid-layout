import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../styles/skeleton';

class CcCheckbox extends LitElement {
  static get properties () {
    return {
      label: { type: String },
    };
  }

  render () {
    return html`
      <label class="checkbox">
        <span class="check-wrap">
          <input
             type="checkbox"
             value="false"
             />
          <span class="checkmark"></span>
        </span>
        <span class="check-label skeleton">${this.label}</span>
      </label>
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
      .checkbox {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0;
      }
      .checkbox.disabled {
        color: #eaeaea;
        cursor: not-allowed;
      }
      
      .checkbox > .check-wrap {
        user-select: none;
        position: relative;
        margin-right: 1rem;
      }
      
      .check-wrap > input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }
      
      .check-wrap > input:disabled {
        cursor: not-allowed;
      }
      
      .check-wrap > .checkmark {
        display: flex;
        justify-content: center;
        width: 20px;
        height: 20px;
        cursor: pointer;
        border: 1px solid #777;
        border-radius: 0;
      }
      
      .check-wrap > input:hover:not(:disabled) ~ .checkmark{
        border: 1px solid #bbb;
      }
      
      .check-wrap > input:focus:not(:disabled) ~ .checkmark,
      .check-wrap > input:active:not(:disabled) ~ .checkmark {
        box-shadow: #777 0 0 2px 2px;
      }
      
      .check-wrap > input:checked:not(:disabled) ~ .checkmark  {
        background-color: #bbb;
        border: 1px solid #bbb;
      }
      
      .check-wrap > input:disabled ~ .checkmark {
        cursor: not-allowed;
        border: 1px solid #eaeaea;
      }
      .check-wrap > input:disabled:checked ~ .checkmark {
        cursor: not-allowed;
        background: #eaeaea;
      }
      
      .check-wrap > input:checked ~ .checkmark::after {
        content: '';
        position: absolute;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        left: 8px;
        top: 4px;
        width: 4px;
        height: 8px;
        transform: rotate(45deg);
      }
      .skeleton {
        background: #bbb;
      }
      `,
    ];
  }
}

window.customElements.define('cc-checkbox', CcCheckbox);
