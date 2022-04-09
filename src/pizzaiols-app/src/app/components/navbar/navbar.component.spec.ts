import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MemoizedSelector} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {cartStoreSelectors} from "../../store/cart";
import {userStoreSelectors} from "../../store/user";
import {State} from "../../store/user/user.state";

import {NavbarComponent} from './navbar.component';

describe('app.modules.shared.navbar.NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let mockStore: MockStore;
  let mockUserResponseSelector: MemoizedSelector<State, any>;
  let mockPizzasCountSelector: MemoizedSelector<State, any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        provideMockStore()
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);

    mockStore = TestBed.inject(MockStore);
    mockUserResponseSelector = mockStore.overrideSelector(
      userStoreSelectors.getUserResponseState,
      null
    );
    mockPizzasCountSelector = mockStore.overrideSelector(
      cartStoreSelectors.getPizzasCountState,
      null
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
