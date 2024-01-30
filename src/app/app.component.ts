import { Component, ViewChild } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { materialModules } from './shared/utils/material/material-module';
import { HeaderComponent } from './shared/ui/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ...materialModules,
    HeaderComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sadres';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  sidenavOpen() {
    this.sidenav.open();
  }
}
