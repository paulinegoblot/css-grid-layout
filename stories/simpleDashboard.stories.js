import '../components/dashboard/cc-dashboard';
import '../components/tiles/cc-header';
import { storiesOf } from '@storybook/html';

function createComponent (width) {
  const component = document.createElement('cc-dashboard');
  component.style.minHeight = '750px';
  component.style.maxWidth = width + 'px';
  component.style.width = '100%';
  return component;
}

storiesOf('CSS Grid layout| Simple dashboard', module)
  .add('named-area', () => {
    const dashboard = createComponent(1250);
    dashboard.innerHTML=`
      <cc-header-app class="head"></cc-header-app>
    `;
    return dashboard;
  });
