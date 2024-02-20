import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as SlotsActions from './slots.actions';
import * as SlotsSelectors from './slots.selectors';

@Injectable()
export class SlotsFacade {
  private readonly store = inject(Store);

  init() {
    this.store.dispatch(SlotsActions.loadCategories());
    this.store.dispatch(SlotsActions.loadProviders());
    this.store.dispatch(SlotsActions.loadCategories());
  }

  getCategories() {
    return this.store.pipe(select(SlotsSelectors.selectCategories));
  }
  getProviders() {
    return this.store.pipe(select(SlotsSelectors.selectProviders));
  }

  getProviderGames() {
    return this.store.pipe(select(SlotsSelectors.selectProviderGames));
  }

  fetchProviderGames(provider: string) {
    this.store.dispatch(SlotsActions.loadProviderGames({ provider: provider }));
  }

  getCategoryGames(category: string) {
    this.store.dispatch(SlotsActions.loadCategoryGames({ category: category }));
  }
}
