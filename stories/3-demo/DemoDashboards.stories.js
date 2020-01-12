import '../../components/demo/simple-grid';
import '../../components/demo/placed-tiles-grid';
import '../../components/demo/named-areas-grid';
import { storiesOf } from '@storybook/html';

storiesOf('3. Demo it| CSS grid Layouts', module)
  .add('simple grid', () => {
    return document.createElement('cc-simple-grid');
  })
  .add('grid with tiles placed by column/row number', () => {
    return document.createElement('cc-placed-grid');
  })
  .add('grid with template areas', () => {
    return document.createElement('cc-named-grid');
  });
