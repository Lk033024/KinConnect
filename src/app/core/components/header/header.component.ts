import { Component, EventEmitter, Output, output } from '@angular/core';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Output() toggleSidenav = new EventEmitter<void>();
}
