import '../../components/tiles/cc-header';
import '../../components/tiles/cc-tile-instances';
import '../../components/tiles/cc-tile-scalability';
import '../../components/tiles/cc-tile-deployments';
import '../../components/tiles/cc-tile-consumption';
import '../../components/tiles/cc-tile-requests';
import '../../components/tiles/cc-tile-status-code';
import '../../components/maps/cc-map';
import { LitElement, html, css } from 'lit-element';

class NamedAreasGrid extends LitElement {
  render () {
    return html`
      <div class="grid">
        <cc-header class="head"></cc-header>
        <cc-tile-instances></cc-tile-instances>
        <cc-tile-scalability></cc-tile-scalability>
        <cc-tile-deployments></cc-tile-deployments>
        <cc-tile-consumption></cc-tile-consumption>
        <cc-tile-status-code></cc-tile-status-code>
        <cc-tile-requests></cc-tile-requests>
        <cc-tile-map class="map"></cc-tile-map>
      </div>
    `;
  }

  static get styles () {
    return css`
      .grid {
        max-width: 950px;
        width: 100%;
        display: grid;
        grid-gap: 1rem;
        /*
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, min-content);
        grid-template-areas: 'head head head' '. . .' 'map map .' 'map map .' 'map map .';
        */
      }

      .head {
        /*
        grid-area: head;
        */
      }

      .map {
        height: auto;
        width: auto;
        min-height: 25rem;
        /*
        grid-area: map;
        */
      }
    `;
  }
}

window.customElements.define('cc-named-grid', NamedAreasGrid);
