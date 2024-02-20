import { createReducer, on, Action } from '@ngrx/store';
import * as SlotsActions from './slots.actions';

export const SLOTS_FEATURE_KEY = 'slots';

export interface SlotsState {
  categories: any;
  providers: any;
  providerGames: any;
  loading?: boolean;
}

export const initialSlotsState: SlotsState = {
  categories: undefined,
  providers: undefined,
  providerGames: undefined,
  loading: undefined,
};

const reducer = createReducer(
  initialSlotsState,

  on(SlotsActions.loadCategoriesSuccess, (state, payload) => ({
    ...state,
    categories: payload.games.data.filter((item: any) => item.active),
    loading: false,
  })),
  on(SlotsActions.loadCategoriesFailure, (state) => ({
    ...state,
    categories: undefined,
    loading: false,
  })),

  on(SlotsActions.loadProvidersSuccess, (state, payload) => ({
    ...state,
    providers: payload.providers.data,
    loading: false,
  })),
  on(SlotsActions.loadProvidersFailure, (state) => ({
    ...state,
    providers: undefined,
    loading: false,
  })),
  on(SlotsActions.loadProviderGamesSuccess, (state, payload) => ({
    ...state,
    providerGames: payload.providerGames.data.games,
    loading: false,
  })),
  on(SlotsActions.loadProviderGamesFailure, (state) => ({
    ...state,
    providerGames: undefined,
    loading: false,
  })),

  on(SlotsActions.loadCategoryGames, (state, { category }) => {
    let item = state.categories.find((item: any) => item.category === category);
    return {
      ...state,
      providerGames: item ? item.games : [],
      loading: false,
    };
  }),
);

export function slotsReducer(state: SlotsState | undefined, action: Action) {
  return reducer(state, action);
}
