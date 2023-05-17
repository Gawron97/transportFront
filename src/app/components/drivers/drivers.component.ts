import {Component, OnInit} from '@angular/core';
import {DriverClientService} from "../../services/driver-client.service";
import {DriverDTO} from "../../DTO/DriverDTO";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit{

  drivers: DriverDTO[] = []
  selectedDriver: DriverDTO

  constructor(private driverService: DriverClientService) {
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
  }



}
