import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SignInComponent } from './sign-in/sign-in.component';

const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent},
  { path: 'signup', component: InscriptionComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
