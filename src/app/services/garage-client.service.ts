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
    this.httpClient.post(this.garageUrl, newGarage).subscribe(() => {
      console.log('dodawanie garazu')
    })
  }

  editGarage(idGarage: number, editedGarage: GarageDTO) {
    this.httpClient.patch(this.garageUrl + '/' + idGarage, editedGarage).subscribe(() => {
      console.log('zaktualizowano garaz')
    })
  }

  getGarageWithDetails(idGarage: number): Observable<GarageWithDetailsDTO> {
    return this.httpClient.get<GarageWithDetailsDTO>(this.garageUrl + '/with_details/' + idGarage)
  }


}
