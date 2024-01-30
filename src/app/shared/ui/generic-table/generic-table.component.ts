import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';

import { materialModules } from '../../utils/material/material-module';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [...materialModules],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableComponent {
  @Input({
    required: true,
  })
  tableData: any;

  @Input({
    required: true,
  })
  displayedColumns!: string[];

  @Input({
    required: true,
  })
  columns!: any[];
  
}
