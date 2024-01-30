import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      (
        await import(
          '../features/field-of-study-signals/field-of-study-signals.component'
        )
      ).FieldOfStudySignalsComponent,
    children: [],
  },
];
