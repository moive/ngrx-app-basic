import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SonComponent } from './counter/son/son.component';
import { GrandsonComponent } from './counter/grandson/grandson.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { counterReducer } from './counter/counter.reducer';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, SonComponent, GrandsonComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // REstrict extention to log-only
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
