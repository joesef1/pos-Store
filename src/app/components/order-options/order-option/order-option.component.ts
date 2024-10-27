import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PickupComponent } from '../pickup/pickup.component';
import { DeliveryComponent } from "../delivery/delivery.component";
import { DriveComponent } from "../drive/drive.component";
import { PhonePopupComponent } from "../phone-popup/phone-popup.component";
import { CodeVerificationComponent } from "../code-verification/code-verification.component";


@Component({
  selector: 'app-order-option',
  standalone: true,
  imports: [CommonModule, PickupComponent, DeliveryComponent, DriveComponent, PhonePopupComponent, CodeVerificationComponent],
  templateUrl: './order-option.component.html',
  styleUrl: './order-option.component.css'
})
export class OrderOptionComponent {
  activeTab: string = 'delivery'; // Set initial active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
