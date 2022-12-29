import { Injectable } from '@angular/core';
import { Pet } from "../model/pet";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  public petsUrl: string;

  constructor(private http: HttpClient) {
    this.petsUrl = 'http://localhost:8080/pets';
  }

  public findAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }

  public save(pet: Pet) {
    return this.http.post<Pet>(this.petsUrl, pet);
  }

}
