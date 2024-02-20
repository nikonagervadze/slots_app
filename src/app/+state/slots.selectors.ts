import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SLOTS_FEATURE_KEY, SlotsState } from './slots.reducer';

export const selectSlotsState =
  createFeatureSelector<SlotsState>(SLOTS_FEATURE_KEY);

export const selectLoadingStatus = createSelector(
  selectSlotsState,
  (state: SlotsState) => state.loading,
);

export const selectCategories = createSelector(
  selectSlotsState,
  (state: SlotsState) => state.categories,
);

export const selectProviders = createSelector(
  selectSlotsState,
  (state: SlotsState) => state.providers,
);

export const selectProviderGames = createSelector(
  selectSlotsState,
  (state: SlotsState) => state.providerGames,
);
