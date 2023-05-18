import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GarageDTO} from "../DTO/GarageDTO";
import {Observable} from "rxjs";
import {GarageWithDetailsDTO} from "../DTO/GarageWithDetailsDTO";

@Injectable({
  providedIn: 'root'
})
export class GarageClientService {

  garageUrl: string = 'http://localhost:8080/api/garages'

  constructor(private httpClient: HttpClient) { }

  getGarages(): Observable<GarageDTO[]> {
    return this.httpClient.get<GarageDTO[]>(this.garageUrl)
  }

  saveGarage(newGarage: GarageDTO) {
    return this.httpClient.post(this.garageUrl, newGarage)
  }

  getGarageWithDetails(idGarage: number): Observable<GarageWithDetailsDTO> {
    return this.httpClient.get<GarageWithDetailsDTO>(this.garageUrl + '/with_details/' + idGarage)
  }

  deleteGarage(idGarage: number) {
    return this.httpClient.delete(this.garageUrl + '/' + idGarage)
  }



}
