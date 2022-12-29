import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Type} from "../model/type";
import {Color} from "../model/color";

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  public valuesUrl: string;

  constructor(private http: HttpClient) {
    this.valuesUrl = 'http://localhost:8080/values';
  }

  public findAllTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.valuesUrl + "/types");
  }

  public findAllColors(): Observable<Color[]> {
    return this.http.get<Color[]>(this.valuesUrl + "/colors");
  }
}
