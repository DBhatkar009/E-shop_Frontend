import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [SidebarComponent, AppComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
