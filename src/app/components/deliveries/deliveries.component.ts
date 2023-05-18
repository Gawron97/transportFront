import {Component, OnInit} from '@angular/core';
import {TruckDTO} from "../../DTO/TruckDTO";
import {TruckClientService} from "../../services/truck-client.service";
import {DeliveryClientService} from "../../services/delivery-client.service";
import {DeliveryDTO} from "../../DTO/DeliveryDTO";

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit{

  deliveries: DeliveryDTO[] = [];
  selectedDelivery: DeliveryDTO;
  newDelivery: DeliveryDTO;
  addForm: boolean = false;
  editForm: boolean = false

  constructor(private deliveryService: DeliveryClientService) {
    this.selectedDelivery = this.initDelivery()
    this.newDelivery = this.initDelivery()
  }

  initDelivery(): DeliveryDTO {
    return {
      idDelivery: null,
      itemName: '',
      weight: 0,
      deliveryStatus: '',
      idTruck: null,
      idDriver: null
    };
  }

  ngOnInit(): void {
    this.loadDeliveries()
  }

  selectDelivery(delivery: DeliveryDTO) {
    this.selectedDelivery = {...delivery};
  }

  addDelivery() {
    this.addForm = true
  }

  saveNewDelivery() {
    this.deliveryService.saveDelivery(this.newDelivery).subscribe(() => {
      console.log('dodawanie dostawy')
    })
    this.newDelivery = this.initDelivery()
    this.addForm = false
  }

  cancelAdd() {
    this.addForm = false
  }

  editDelivery() {
    this.editForm = true;
  }

  saveEditedDelivery() {
    this.deliveryService.editDelivery(this.selectedDelivery.idDelivery, this.selectedDelivery).subscribe(() => {
      console.log('edytowano dostawy')
    })
    this.editForm = false
  }

  cancelEdit() {
    this.editForm = false
  }

  refreshDeliveries() {
    this.loadDeliveries()
  }

  loadDeliveries() {
    this.deliveryService.getDeliveries().subscribe((deliveries) => {
      this.deliveries = deliveries;
    })
  }

}
