import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [DashboardComponent, ShellComponent, SidebarComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'admin';
}
