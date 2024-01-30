import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import { materialModules } from '../../utils/material/material-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...materialModules, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() sidenavOpen: EventEmitter<void> = new EventEmitter<void>();

  sidenavOpenEmit(): void {
    this.sidenavOpen.emit();
  }
}
