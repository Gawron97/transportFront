import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeliveryDTO} from "../DTO/DeliveryDTO";

@Injectable({
  providedIn: 'root'
})
export class DeliveryClientService {

  deliveryUrl: string = 'http://localhost:8080/api/deliveries'

  constructor(private httpClient: HttpClient) { }

  getDeliveries(): Observable<DeliveryDTO[]> {
    return this.httpClient.get<DeliveryDTO[]>(this.deliveryUrl)
  }

  saveDelivery(newDelivery: DeliveryDTO) {
    this.httpClient.post(this.deliveryUrl, newDelivery).subscribe(() => {
      console.log('dodawanie dostawy')
    })
  }

  editDelivery(idDelivery: number, editedDelivery: DeliveryDTO) {
    this.httpClient.patch(this.deliveryUrl + '/' + idDelivery, editedDelivery).subscribe(() => {
      console.log('edytowano dostawy')
    })
  }


}
