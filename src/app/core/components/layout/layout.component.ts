import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatSidenavModule,RouterOutlet, HeaderComponent, SidenavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
@ViewChild(MatSidenav) sidenav!: MatSidenav;
ontoggleSidenav() {
  this.sidenav.toggle();
  console.log('sidenav toggled');}
}
