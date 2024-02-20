import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, mergeMap } from 'rxjs';
import * as SlotsActions from './slots.actions';

import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SlotsEffects {
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store);
  private readonly http = inject(HttpClient);

  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SlotsActions.loadCategories),
      mergeMap(() =>
        this.http
          .get(
            'https://cms.crocobet.com/integrations/v2/slot/categories?include=games',
          )
          .pipe(
            map((games) => SlotsActions.loadCategoriesSuccess({ games })),
            catchError((error) =>
              of(SlotsActions.loadCategoriesFailure({ error })),
            ),
          ),
      ),
    ),
  );

  loadProviders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SlotsActions.loadProviders),
      mergeMap(() =>
        this.http
          .get(
            'https://cms.crocobet.com/integrations?type=slot&platform=desktop',
          )
          .pipe(
            map((providers) =>
              SlotsActions.loadProvidersSuccess({ providers }),
            ),
            catchError((error) =>
              of(SlotsActions.loadProvidersFailure({ error })),
            ),
          ),
      ),
    ),
  );

  loadProviderGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SlotsActions.loadProviderGames),
      mergeMap(({ provider }) =>
        this.http
          .get(
            `https://cms.crocobet.com/integrations/v2/slot/providers/${provider}`,
          )
          .pipe(
            map((providerGames) =>
              SlotsActions.loadProviderGamesSuccess({ providerGames }),
            ),
            catchError((error) =>
              of(SlotsActions.loadProviderGamesFailure({ error })),
            ),
          ),
      ),
    ),
  );
}
