import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from 'ui/src/lib/banner/banner.component';
import { OrdersComponent } from 'orders/src/lib/orders/orders.component';
import { RouterModule } from '@angular/router';
// import { AppModule } from '../app.module';

@Component({
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [OrdersComponent, BannerComponent, ProductListComponent, HomePageComponent, HeaderComponent, FooterComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngshop';
}
