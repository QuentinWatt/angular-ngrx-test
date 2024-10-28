import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { reducers } from './app/store';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(reducers),
    provideEffects([]), // Add your effects here
    provideStoreDevtools({ maxAge: 25, logOnly: true }),
  ],
});
