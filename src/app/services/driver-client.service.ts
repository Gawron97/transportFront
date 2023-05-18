import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DriverDTO} from "../DTO/DriverDTO";

@Injectable({
  providedIn: 'root'
})
export class DriverClientService {

  driverUrl: string = 'http://localhost:8080/api/drivers'

  constructor(private httpClient: HttpClient) { }

  getDrivers(): Observable<DriverDTO[]> {
    return this.httpClient.get<DriverDTO[]>(this.driverUrl)
  }

  saveDriver(newDriver: DriverDTO) {
    return this.httpClient.post(this.driverUrl, newDriver)
  }

  editDriver(idDriver: number, editedDriver: DriverDTO) {
    return this.httpClient.patch(this.driverUrl + '/' + idDriver, editedDriver)
  }

  deleteDriver(idDriver: number) {
    return this.httpClient.delete(this.driverUrl + '/' + idDriver)
  }


}
