import leaflet from 'leaflet';
import { LitElement, html, css } from 'lit-element';
import { WORLD_GEOJSON } from './world-110m.geo.js';
import { leafletStyles } from '../styles/leaflet.js';

// Generated with https://components.ai/color-scale/
// Canvas at #F5F5F5 (map country color)
// From #40B970 to #003814 with 8 steps
/*
const COLOR_PALETTE = [
  '#40b970',
  '#36a562',
  '#2c9254',
  '#237f46',
  '#1a6c39',
  '#115a2c',
  '#084920',
  '#003814',
];
*/

class CcMap extends LitElement {

  constructor () {
    super();
    // Centered on Paris by default
    this.centerLat = 48.9;
    this.centerLon = 2.4;
    this._colorIndex = 0;
  }

  get centerLat () {
    return this._centerLat;
  }

  get centerLon () {
    return this._centerLon;
  }

  set centerLat (newVal) {
    const oldVal = this._centerLat;
    this._centerLat = newVal;
    this.requestUpdate('centerLat', oldVal);
    if (this._map != null) {
      this._map.setView([newVal, this._centerLon]);
    }
  }

  set centerLon (newVal) {
    const oldVal = this._centerLon;
    this._centerLon = newVal;
    this.requestUpdate('centerLon', oldVal);
    if (this._map != null) {
      this._map.setView([this._centerLat, newVal]);
    }
  }

  _resetCurrentLayer () {
    if (this._map != null) {
      (this._mode === 'heatmap')
        ? this._map.addLayer(this._heatLayer)
        : this._map.removeLayer(this._heatLayer);
      (this._mode === 'points')
        ? this._map.addLayer(this._pointsLayer)
        : this._map.removeLayer(this._pointsLayer);
    }
  }

  // Draw the Leaflet map
  firstUpdated () {

    const leafletOptions = {
      // Block view on the world
      attributionControl: false,
      doubleClickZoom: false,
      dragging: false,
      keyboard: false,
      maxBounds: [[-84, -180], [90, 180]],
      maxBoundsViscosity: 1,
      maxZoom: 2,
      minZoom: 2,
      zoomControl: false,
    };

    // Init map
    this._map = leaflet
      .map(this.renderRoot.getElementById('cc-map-container'), leafletOptions)
      .setView([this._centerLat, this._centerLon], 2);

    // Init world map from geojson data
    leaflet
      .geoJSON(WORLD_GEOJSON, {
        style: { className: 'map-country' },
        pane: 'tilePane',
      })
      .addTo(this._map);

    // Init layers
    this._pointsLayer = leaflet.layerGroup();
    this._heatLayer = leaflet.layerGroup();
    this._resetCurrentLayer();
  }

  render () {
    return html`
      <div id="cc-map-container"></div>
    `;
  }

  static get styles () {
    return [
      leafletStyles,
      css`
        :host {

          display: flex;
          flex-direction: column;
          height: 15rem;
          position: relative;
          width: 20rem;
        }
        #cc-map-container {
          flex: 1 1 0;
          width: 100%;
        }
        .leaflet-container {
          background-color: #aadaff;
          z-index: 1;
        }
        .map-country {
          fill: #f5f5f5;
          fill-opacity: 1;
          stroke: #ddd;
          stroke-width: 1;
        }
      `,
    ];
  }
}

window.customElements.define('cc-map', CcMap);
