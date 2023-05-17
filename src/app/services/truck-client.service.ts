import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TruckDTO} from "../DTO/TruckDTO";



@Injectable({
  providedIn: 'root'
})
export class TruckClientService {

  truckUrl: string = 'http://localhost:8080/api/trucks'

  constructor(private httpClient: HttpClient) { }

  public getTrucks(): Observable<TruckDTO[]> {
    console.log('pobiera')
    return this.httpClient.get<TruckDTO[]>(this.truckUrl);
  }

  public getTruck(): Observable<TruckDTO> {
    console.log('pobieranie jednego')
    return this.httpClient.get<TruckDTO>(this.truckUrl + '/1');
  }

  saveTruck(newTruck: TruckDTO) {
    console.log('wysylanie post')
    this.httpClient.post(this.truckUrl, newTruck).subscribe(() => {
      console.log('udane zadanie post')
    })
  }

}
