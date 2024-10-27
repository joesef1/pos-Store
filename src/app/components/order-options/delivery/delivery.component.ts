import { Component } from '@angular/core';
import { PhonePopupComponent } from "../phone-popup/phone-popup.component";

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [PhonePopupComponent],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {

}
