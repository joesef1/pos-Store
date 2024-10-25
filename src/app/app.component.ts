import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryBarComponent } from './components/category-bar/category-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemsComponent } from './components/items/items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { BranchItemComponent } from "./components/branch-item/branch-item.component";
import { DeliveryComponent } from "./components/order-options/delivery/delivery.component";
import { DriveComponent } from "./components/order-options/drive/drive.component";
import { BackgroundLayerComponent } from "./components/background-layer/background-layer.component";
import { AddToCartItemModalComponent } from "./add-to-cart-item-modal/add-to-cart-item-modal.component";
import { MobilCategoryBarComponent } from "./mobil-category-bar/mobil-category-bar.component";
import { OrderOptionComponent } from "./order-option/order-option.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CartComponent, CategoryBarComponent, FooterComponent, ItemsComponent, NavbarComponent, BannerComponent, BranchItemComponent, BackgroundLayerComponent, AddToCartItemModalComponent, MobilCategoryBarComponent, OrderOptionComponent,DeliveryComponent ,DriveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'posClonnig';
}
