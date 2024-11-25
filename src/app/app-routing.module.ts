import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftCardComponent } from './pages/gift-card/gift-card.component';

const routes: Routes = [
  {
    path: 'gift-card',
    component: GiftCardComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'gift-card'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
