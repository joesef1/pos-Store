import { Component } from '@angular/core';
import { AddToCartItemModalComponent } from "../../add-to-cart-item-modal/add-to-cart-item-modal.component";
import { OrderTimeComponent } from "../order-time/order-time.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AddToCartItemModalComponent, OrderTimeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDivVisible: boolean = false;

  toggleDivVisibility() {
    this.isDivVisible = !this.isDivVisible;
    console.log("testing");

  }


  toggleTimeForOrderVisibility() {
console.log("ntjhnnhrtedu");

  }

}
