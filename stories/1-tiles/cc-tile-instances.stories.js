import '../../components/tiles/cc-tile-instances';
import { storiesOf } from '@storybook/html';

storiesOf('1. Tiles| <cc-tile-instances>', module)
  .add('Default', () => {
    return `<cc-tile-instances style="display: inline-grid;margin-bottom: 1rem;margin-right: 1rem;width: 275px;"></cc-tile-instances>`;
  });
