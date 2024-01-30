import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      (await import('../features/home-default/home-default.component'))
        .HomeDefaultComponent,
    children: [],
  },
];
