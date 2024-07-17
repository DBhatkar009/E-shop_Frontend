import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CalendarModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  date: Date | undefined;
}
