import '../../components/tiles/cc-tile-map';
import { storiesOf } from '@storybook/html';

storiesOf('1. Tiles| <cc-tile-map>', module)
  .add('Default', () => {
    return `<cc-tile-map style="display: inline-grid;margin-bottom: 1rem;margin-right: 1rem;width: 275px;"></cc-tile-map>`;
  });
