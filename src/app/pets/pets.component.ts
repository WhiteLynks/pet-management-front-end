import { Component, OnInit } from '@angular/core';
import { Pet } from "../model/pet";
import { PetServiceService } from "../service/pet-service.service";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: Pet[]

  constructor(private petService: PetServiceService) { }

  ngOnInit() {
    this.petService.findAll().subscribe(data => {
      this.pets = data;
    });
  }

}
