import '../../components/dashboard/cc-dashboard';
import '../../components/tiles/cc-header';
import '../../components/tiles/cc-tile-instances';
import '../../components/tiles/cc-tile-scalability';
import '../../components/tiles/cc-tile-deployments';
import '../../components/tiles/cc-tile-consumption';
import '../../components/maps/cc-map';
import { storiesOf } from '@storybook/html';

function createDashboard (width) {
  const component = document.createElement('cc-dashboard');
  component.style.maxWidth = width + 'px';
  component.style.width = '100%';
  return component;
}

storiesOf('2. Dashboards| Simple dashboard', module)
  .add('named-area', () => {
    const dashboard = createDashboard(1250);
    dashboard.innerHTML = `
      <cc-header class="head"></cc-header>
      <cc-tile-instances></cc-tile-instances>
      <cc-tile-scalability></cc-tile-scalability>
      <cc-tile-deployments></cc-tile-deployments>
      <cc-tile-consumption></cc-tile-consumption>
      <cc-tile-map class="map"></cc-tile-map>
    `;
    return dashboard;
  });
