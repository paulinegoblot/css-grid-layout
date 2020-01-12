import '../../components/tiles/cc-header';
import '../../components/tiles/cc-tile-instances';
import '../../components/tiles/cc-tile-scalability';
import '../../components/tiles/cc-tile-deployments';
import '../../components/tiles/cc-tile-consumption';
import '../../components/tiles/cc-tile-requests';
import '../../components/tiles/cc-tile-status-code';
import '../../components/maps/cc-map';
import { LitElement, html, css } from 'lit-element';

class SimpleGrid extends LitElement {
  render () {
    return html`
      <section class="grid">
        <div class="head">Header</div>
        <div>Instances</div>
        <div>Scalability</div>
        <div>Last deployments</div>
        <div>Credits consumption</div>
        <div>HTTP response codes</div>
        <div>HTTP requests</div>
        <div class="map">Map</div>
      </section>
    `;
  }

  static get styles () {
    return css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 0.25rem;
        border: 1px solid #bcc2d1;
        box-sizing: border-box;
        min-height: 3rem;
      }

      .grid {
        max-width: 950px;
        width: 100%;
        /*
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, min-content);
        */
      }

      .head {
        /*
        grid-column: 1 / -1;
        */
      }

      .map {
        /*
        grid-column: 1 / span 2;
        grid-row: 3 / -1;
        */
      }
    `;
  }
}

window.customElements.define('cc-simple-grid', SimpleGrid);
