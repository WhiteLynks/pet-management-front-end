import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from "./pets/pets.component";
import {PetFormComponent} from "./pet-form/pet-form.component";

const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'addpet', component: PetFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
