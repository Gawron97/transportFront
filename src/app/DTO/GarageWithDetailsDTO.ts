import {TruckDTO} from "./TruckDTO";
import {DriverDTO} from "./DriverDTO";

export interface GarageWithDetailsDTO {
  idGarage: any
  name: string
  truckDTOList: TruckDTO[]
  driverDTOList: DriverDTO[]
}
