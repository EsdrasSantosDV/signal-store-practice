import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-default',
  standalone: true,
  imports: [],
  templateUrl: './home-default.component.html',
  styleUrl: './home-default.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDefaultComponent {

}
