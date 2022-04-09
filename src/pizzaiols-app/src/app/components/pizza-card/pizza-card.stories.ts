import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {PizzaCardModule} from './pizza-card.module';

storiesOf('Modules / Shared / RestaurantCard', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        PizzaCardModule,
      ],
      providers: [
        provideMockStore()
      ]
    }),
  )
  .add('default', () => {
    return {
      template: `<restaurants-restaurant-card></restaurants-restaurant-card>`
    };
  });
