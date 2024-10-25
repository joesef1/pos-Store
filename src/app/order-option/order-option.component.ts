import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BranchItemComponent } from '../components/branch-item/branch-item.component';


@Component({
  selector: 'app-order-option',
  standalone: true,
  imports: [CommonModule,BranchItemComponent],
  templateUrl: './order-option.component.html',
  styleUrl: './order-option.component.css'
})
export class OrderOptionComponent {
  activeTab: string = 'delivery'; // Set initial active tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
