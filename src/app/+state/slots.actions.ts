import { createAction, props } from '@ngrx/store';

export const loadCategories = createAction('[Categories] Load Categories');
export const loadCategoriesSuccess = createAction(
  '[Categories] Load Categories Success',
  props<{ games: any }>(),
);
export const loadCategoriesFailure = createAction(
  '[Categories] Load Categories Failure',
  props<{ error: any }>(),
);

export const loadProviders = createAction('[Providers] Load Providers');
export const loadProvidersSuccess = createAction(
  '[Providers] Load Providers Success',
  props<{ providers: any }>(),
);
export const loadProvidersFailure = createAction(
  '[Providers] Load Providers Failure',
  props<{ error: any }>(),
);

export const loadProviderGames = createAction(
  '[Games] Load Provider Games',
  props<{ provider: string }>(),
);
export const loadProviderGamesSuccess = createAction(
  '[Games] Load Provider Games Success',
  props<{ providerGames: any }>(),
);
export const loadProviderGamesFailure = createAction(
  '[Games] Load Provider Games Failure',
  props<{ error: any }>(),
);

export const loadCategoryGames = createAction(
  '[Category] Load Category Games',
  props<{ category: string }>(),
);
