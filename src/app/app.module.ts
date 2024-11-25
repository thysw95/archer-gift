import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftCardComponent } from './pages/gift-card/gift-card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagePageComponent } from './pages/gift-card/message-page/message-page.component';
import { PicturePageComponent } from './pages/gift-card/picture-page/picture-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    GiftCardComponent,
    MessagePageComponent,
    PicturePageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
