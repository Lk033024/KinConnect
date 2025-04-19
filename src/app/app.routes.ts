import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components//layout/layout.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { FamilyTreeComponent } from './core/components/family-tree/family-tree.component';
import { GalleryComponent } from './core/components/gallery/gallery.component';
import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'gallery', component: GalleryComponent },
        { path: 'family-tree', component: FamilyTreeComponent },
        { path: 'profile', component: ProfileComponent },
      ],
    },
  ];
