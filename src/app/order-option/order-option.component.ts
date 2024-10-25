import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BranchItemComponent } from '../components/branch-item/branch-item.component';
import { DeliveryComponent } from "../components/order-options/delivery/delivery.component";
import { DriveComponent } from "../components/order-options/drive/drive.component";


@Component({
  selector: 'app-order-option',
  standalone: true,
  imports: [CommonModule, BranchItemComponent, DeliveryComponent, DriveComponent],
  templateUrl: './order-option.component.html',
  styleUrl: './order-option.component.css'
})
export class OrderOptionComponent {
  activeTab: string = 'delivery'; // Set initial active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
