import '../../components/dashboard/cc-placed-areas-dashboard';
import '../../components/tiles/cc-header';
import '../../components/tiles/cc-tile-instances';
import '../../components/tiles/cc-tile-scalability';
import '../../components/tiles/cc-tile-deployments';
import '../../components/tiles/cc-tile-consumption';
import '../../components/tiles/cc-tile-requests';
import '../../components/tiles/cc-tile-consumption';
import '../../components/maps/cc-map';
import { storiesOf } from '@storybook/html';

function createDashboard (width, className) {
  const component = document.createElement('cc-placed-areas-dashboard');
  component.className = className
  component.style.maxWidth = width + 'px';
  component.style.width = '100%';
  return component;
}

storiesOf('2. Dashboards| Placed Areas', module)
  .add('2 columns', () => {
    const dashboard = createDashboard(850, 'col-2');
    dashboard.innerHTML = `
      <cc-header class="head"></cc-header>
      <cc-tile-instances></cc-tile-instances>
      <cc-tile-scalability></cc-tile-scalability>
      <cc-tile-deployments></cc-tile-deployments>
      <cc-tile-consumption></cc-tile-consumption>
      <cc-tile-status-code></cc-tile-status-code>
      <cc-tile-requests></cc-tile-requests>
      <cc-tile-map class="map"></cc-tile-map>
    `;
    return dashboard;
  })
  .add('3 columns', () => {
    const dashboard = createDashboard(950, 'col-3');
    dashboard.innerHTML = `
      <cc-header class="head"></cc-header>
      <cc-tile-instances></cc-tile-instances>
      <cc-tile-scalability></cc-tile-scalability>
      <cc-tile-deployments></cc-tile-deployments>
      <cc-tile-consumption></cc-tile-consumption>
      <cc-tile-status-code></cc-tile-status-code>
      <cc-tile-requests></cc-tile-requests>
      <cc-tile-map class="map"></cc-tile-map>
    `;
    return dashboard;
  })
  .add('4 columns', () => {
    const dashboard = createDashboard(1150, 'col-4');
    dashboard.innerHTML = `
      <cc-header class="head"></cc-header>
      <cc-tile-instances></cc-tile-instances>
      <cc-tile-scalability></cc-tile-scalability>
      <cc-tile-deployments></cc-tile-deployments>
      <cc-tile-consumption></cc-tile-consumption>
      <cc-tile-status-code></cc-tile-status-code>
      <cc-tile-requests></cc-tile-requests>
      <cc-tile-map class="map"></cc-tile-map>
    `;
    return dashboard;
  });
