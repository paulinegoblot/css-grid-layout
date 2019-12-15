import { LitElement, html, css } from 'lit-element';
import '../atoms/cc-button.js';

class CcHeader extends LitElement {
  render () {
    return html`
      <div class="main">
        <div class="flavor-logo">
          <img class="flavor-logo_img" src="" alt="">
        </div>

        <div class="details">
          <div class="name"><span class="skeleton"></span></div>
          <div class="commits">
          <span class="commit-item" data-type="git">
            <!-- image has a presentation role => alt="" -->
            <img class="commit_img" alt="" src="static/media/git.2ed3bbe1.svg">
            <!-- Keep this on one line to ease copy/paste -->
            <span class="skeleton">
              ????????
              <span class="commit_rest"></span>
            </span>
          </span>
          </div>
        </div>

        <div class="buttons">
          <cc-button>Restart</cc-button>
          <cc-button> Re-build and restart</cc-button>
          <cc-button> Restart last pushed commit</cc-button>
          <cc-button>Stop App</cc-button>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        background-color: #fff;
        border-radius: 0.25rem;
        border: 1px solid #bcc2d1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
    `;
  }
}

window.customElements.define('cc-header', CcHeader);
