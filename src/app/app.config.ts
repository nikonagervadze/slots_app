import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import * as fromSlots from './+state/slots.reducer';
import { SlotsEffects } from './+state/slots.effects';
import { HttpClientModule } from '@angular/common/http';
import { SlotsFacade } from './+state/slots.facade';

export const appConfig: ApplicationConfig = {
  providers: [
    SlotsFacade,
    importProvidersFrom(
      StoreModule.forRoot({}),
      EffectsModule.forRoot({}),

      StoreModule.forFeature(
        fromSlots.SLOTS_FEATURE_KEY,
        fromSlots.slotsReducer
      ),
      EffectsModule.forFeature(SlotsEffects),
      RouterModule.forRoot(routes),

      HttpClientModule
    ),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
};
