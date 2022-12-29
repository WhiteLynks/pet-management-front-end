import { Component, OnInit } from '@angular/core';
import {Pet} from "../model/pet";
import {ActivatedRoute, Router} from "@angular/router";
import {PetServiceService} from "../service/pet-service.service";

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetServiceService) {
    this.pet= new Pet();
  }

  ngOnInit(): void {
    }


  onSubmit() {
    this.petService.save(this.pet).subscribe(result => this.gotoPetList());
  }

  gotoPetList() {
    this.router.navigate(['/pets']);
  }

}
