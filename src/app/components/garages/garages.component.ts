import {Component, OnInit} from '@angular/core';
import {GarageDTO} from "../../DTO/GarageDTO";
import {GarageClientService} from "../../services/garage-client.service";
import {GarageWithDetailsDTO} from "../../DTO/GarageWithDetailsDTO";
import {TruckDTO} from "../../DTO/TruckDTO";
import {DriverDTO} from "../../DTO/DriverDTO";

@Component({
  selector: 'app-garages',
  templateUrl: './garages.component.html',
  styleUrls: ['./garages.component.css']
})
export class GaragesComponent implements OnInit {


  garages: GarageDTO[] = [];
  garageWithDetails: GarageWithDetailsDTO
  selectedGarage: GarageDTO;
  newGarage: GarageDTO;
  addForm: boolean = false;
  detailsForm: boolean = false

  constructor(private garageService: GarageClientService) {
    this.selectedGarage = this.initGarage()
    this.newGarage = this.initGarage()
    this.garageWithDetails = this.initGarageWithDetails()
  }

  initGarageWithDetails(): GarageWithDetailsDTO {
    return {
      idGarage: null,
      name: '',
      truckDTOList: [],
      driverDTOList: []
    }
  }

  initGarage(): GarageDTO {
    return {
      idGarage: null,
      name: ''
    };
  }

  ngOnInit(): void {
    this.loadGarages()
  }

  selectGarage(garage: GarageDTO) {
    this.selectedGarage = {...garage};
  }

  addGarage() {
    this.addForm = true
  }

  saveNewGarage() {
    this.garageService.saveGarage(this.newGarage).subscribe(() => {
      console.log('dodawanie garazu')
    })
    this.newGarage = this.initGarage()
    this.addForm = false
  }

  cancelAdd() {
    this.addForm = false
  }

  refreshGarages() {
    this.loadGarages()
  }

  loadGarages() {
    this.garageService.getGarages().subscribe((garages) => {
      this.garages = garages;
    })
  }

  showDetails() {
    if(this.selectedGarage.idGarage != null) {
      this.detailsForm = true
      this.garageService.getGarageWithDetails(this.selectedGarage.idGarage)
        .subscribe((garageWithDetails) => {
          this.garageWithDetails = garageWithDetails
        })
    }
  }

  cancel() {
    this.detailsForm = false
  }

  deleteGarage() {
    if(this.selectedGarage != null)
      this.garageService.deleteGarage(this.selectedGarage.idGarage).subscribe(() => {
        console.log('usuwanie garazu')
      })
  }
}
