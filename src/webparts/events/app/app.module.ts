
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';

import { DataService } from './services/data.services';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [AppComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }
  public ngDoBootstrap() {
    if (!customElements.get('spfx-app')) {
      const appElement = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('spfx-app', appElement);
    }
  }
}


