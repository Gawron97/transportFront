import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TruckDTO} from "../DTO/TruckDTO";
import {TrucksComponent} from "../components/trucks/trucks.component";



@Injectable({
  providedIn: 'root'
})
export class TruckClientService {

  truckUrl: string = 'http://localhost:8080/api/trucks'

  constructor(private httpClient: HttpClient) { }

  getTrucks(): Observable<TruckDTO[]> {
    return this.httpClient.get<TruckDTO[]>(this.truckUrl);
  }

  saveTruck(newTruck: TruckDTO) {
    return this.httpClient.post(this.truckUrl, newTruck)
  }

  editTruck(idTruck: number, editedTruck: TruckDTO) {
    return this.httpClient.patch(this.truckUrl + '/' + idTruck, editedTruck)
  }

  deleteTruck(idTruck: number) {
    return this.httpClient.delete(this.truckUrl + '/' + idTruck)
  }

}
