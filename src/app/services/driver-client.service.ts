import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DriverClientService {

  driverUrl: string = 'http://localhost:8080/api/drivers'

  constructor(private httpClient: HttpClient) { }



}
