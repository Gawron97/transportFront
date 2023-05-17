import {Component, OnInit} from '@angular/core';
import {DriverClientService} from "../../services/driver-client.service";
import {DriverDTO} from "../../DTO/DriverDTO";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit{

  drivers: DriverDTO[] = []
  selectedDriver: DriverDTO
  newDriver: DriverDTO
  addForm: boolean = false
  editForm: boolean = false

  constructor(private driverService: DriverClientService) {
    this.selectedDriver = this.initDriver()
    this.newDriver = this.initDriver()
  }

  initDriver(): DriverDTO {
    return {
      idDriver: null,
      name: '',
      surname: '',
      salary: 0,
      age: 0,
      status: '',
      idGarage: 0
    }
  }

  ngOnInit(): void {
    this.loadDrivers()
  }

  selectDriver(driver: DriverDTO) {
    this.selectedDriver = {...driver}
  }

  addDriver() {
    this.addForm = true;
  }

  saveNewDriver() {
    this.driverService.saveDriver(this.newDriver)
    this.newDriver = this.initDriver()
    this.addForm = false
  }

  cancelAdd() {
    this.addForm = false
  }

  editDriver() {
    this.editForm = true
  }

  saveEditedDriver() {
    this.driverService.editDriver(this.selectedDriver.idDriver, this.selectedDriver)
    this.editForm = false
  }

  cancelEdit() {
    this.editForm = false
  }

  refreshDriver() {
    this.loadDrivers()
  }

  loadDrivers() {
    this.driverService.getDrivers().subscribe(drivers => {
      this.drivers = drivers
    })
  }
}
