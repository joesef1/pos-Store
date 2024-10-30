import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-to-cart-item-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-cart-item-modal.component.html',
  styleUrls: ['./add-to-cart-item-modal.component.css']
})
export class AddToCartItemModalComponent {
  options = [
    { name: 'سلطة ورق عنب', price: 29, checked: false },
    { name: 'سيزر', price: 24, checked: false },
    { name: 'جرجير', price: 23, checked: false },
    { name: 'فتوش', price: 21, checked: false },
    { name: 'يونانية', price: 23, checked: false },
    // Add more options as needed
  ];

  toggleCheck(option: any) {
    option.checked = !option.checked;
  }







}
