import '../../components/tiles/cc-tile-deployments';
import { storiesOf } from '@storybook/html';

storiesOf('1. Tiles| <cc-tile-deployments>', module)
  .add('Default', () => {
    return `<cc-tile-deployments style="display: inline-grid;margin-bottom: 1rem;margin-right: 1rem;width: 275px;"></cc-tile-deployments>`;
  });
