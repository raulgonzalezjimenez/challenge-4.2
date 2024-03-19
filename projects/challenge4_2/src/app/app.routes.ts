import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'personal',
    title: 'Personal',
    loadComponent: () => import('../personal/personal.component'),
  },
  {
    path: 'access',
    title: 'Access',
    loadComponent: () => import('../../src/access/access.component'),
  },
  {
    path: 'confirmation',
    title: 'Confirmation',
    loadComponent: () =>
      import('../../src/confirmation/confirmation.component'),
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('../login/login.component'),
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },



export const routes: Routes = [];

