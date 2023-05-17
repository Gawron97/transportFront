import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transportFront';

  trucksPanel: boolean = true
  driversPanel: boolean = false
  garagesPanel: boolean = false
  deliveriesPanel: boolean = false

  disableAllPanels() {
    this.trucksPanel = false
    this.driversPanel = false
    this.garagesPanel = false
    this.deliveriesPanel = false
  }

  openTrucksPanel() {
    this.disableAllPanels()
    this.trucksPanel = true
  }

  openDriversPanel() {
    this.disableAllPanels()
    this.driversPanel = true
  }

  openGaragesPanel() {
    this.disableAllPanels()
    this.garagesPanel = true
  }

  openDeliveriesPanel() {
    this.disableAllPanels()
    this.deliveriesPanel = true
  }

}
