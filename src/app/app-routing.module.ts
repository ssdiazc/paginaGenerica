import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralConditionsComponent } from './components/general-conditions/general-conditions.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResponsabilityClauseComponent } from './components/responsability-clause/responsability-clause.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'condiciones-generales', component: GeneralConditionsComponent },
  { path: 'clau-resp', component: ResponsabilityClauseComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
