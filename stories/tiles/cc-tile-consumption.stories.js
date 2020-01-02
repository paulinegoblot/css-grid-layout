import '../../components/tiles/cc-tile-consumption';
import { storiesOf } from '@storybook/html';

storiesOf('1. Tiles| <cc-tile-consumption>', module)
  .add('Default', () => {
    return `<cc-tile-consumption style="display: inline-grid;margin-bottom: 1rem;margin-right: 1rem;width: 275px;"></cc-tile-consumption>`;
  });
