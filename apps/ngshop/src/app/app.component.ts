import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BannerComponent } from 'ui/src/lib/banner/banner.component';
import { OrdersComponent } from 'orders/src/lib/orders/orders.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';




@Component({
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ HomePageComponent, ProductListComponent, HeaderComponent, FooterComponent, OrdersComponent, BannerComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngshop';
}
