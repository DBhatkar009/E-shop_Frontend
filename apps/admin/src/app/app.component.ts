import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@Component({
  standalone: true,
  imports: [DashboardComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'admin';
}
