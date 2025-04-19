import { RenderMode, ServerRoute } from '@angular/ssr';
import { provideServerRouting } from '@angular/ssr';
import { Routes } from '@angular/router';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'home',
    renderMode: RenderMode.Client
  },
  {
    path: 'gallery',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'profile',
    renderMode: RenderMode.Server,
  },
  {
    path: 'family-tree',
    renderMode: RenderMode.Server,
  },
  {
    path:'**',
    renderMode: RenderMode.Server,
  }
];
