import '../../components/tiles/cc-tile-scalability';
import { storiesOf } from '@storybook/html';

storiesOf('1. Tiles| <cc-tile-scalability>', module)
  .add('Default', () => {
    return `<cc-tile-scalability style="display: inline-grid;margin-bottom: 1rem;margin-right: 1rem;width: 275px;"></cc-tile-scalability>`;
  });
