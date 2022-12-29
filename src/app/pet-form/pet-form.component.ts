import { Component, OnInit } from '@angular/core';
import {Pet} from "../model/pet";
import {ActivatedRoute, Router} from "@angular/router";
import {PetServiceService} from "../service/pet-service.service";
import {Type} from "../model/type";
import {ValuesService} from "../service/values.service";
import {Color} from "../model/color";

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  types: Type[];
  colors: Color[]
  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private valueService: ValuesService,
    private petService: PetServiceService) {
    this.pet= new Pet();
  }

  ngOnInit(): void {
    this.valueService.findAllTypes().subscribe(data => {
      this.types = data;
    })
    this.valueService.findAllColors().subscribe(data => {
      this.colors = data;
    })
    }


  onSubmit() {
    this.petService.save(this.pet).subscribe(result => this.gotoPetList());
  }

  gotoPetList() {
    this.router.navigate(['/pets']);
  }

}
