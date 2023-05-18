import {Component, OnInit} from '@angular/core';
import {TruckClientService} from "../../services/truck-client.service";
import {TruckDTO} from "../../DTO/TruckDTO";

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {

  trucks: TruckDTO[] = [];
  selectedTruck: TruckDTO;
  newTruck: TruckDTO;
  addForm: boolean = false;
  editForm: boolean = false

  constructor(private truckService: TruckClientService) {
    this.selectedTruck = this.initTruck()
    this.newTruck = this.initTruck()
  }

  initTruck(): TruckDTO {
    return {
      idTruck: null,
      brand: '',
      model: '',
      capacity: 0,
      status: '',
      idGarage: 0
    };
  }

  ngOnInit(): void {
    this.loadTrucks()
  }

  selectTruck(truck: TruckDTO) {
    this.selectedTruck = {...truck};
  }

  addTruck() {
    this.addForm = true
  }

  saveNewTruck() {
    this.truckService.saveTruck(this.newTruck).subscribe(() => {
      console.log('udane zadanie post')
    })
    this.newTruck = this.initTruck()
    this.addForm = false
  }

  cancelAdd() {
    this.addForm = false
  }

  editTruck() {
    this.editForm = true;
  }

  saveEditedTruck() {
    this.truckService.editTruck(this.selectedTruck.idTruck, this.selectedTruck).subscribe(() => {
      console.log('udane zadanie patch')
    })
    this.editForm = false
  }

  cancelEdit() {
    this.editForm = false
  }

  refreshTrucks() {
    this.loadTrucks()
  }

  loadTrucks() {
    this.truckService.getTrucks().subscribe((trucks) => {
      this.trucks = trucks;
    })
  }

  deleteTruck() {
    if(this.selectedTruck != null)
      this.truckService.deleteTruck(this.selectedTruck.idTruck).subscribe(() => {
        console.log('usuwanie trucka')
      })
  }
}
