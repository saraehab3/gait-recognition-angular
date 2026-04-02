import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'otp',
    loadComponent: () =>
      import('./pages/otp/otp.component').then(m => m.OtpComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'upload',
    loadComponent: () =>
      import('./pages/upload-video/upload-video.component').then(m => m.UploadVideoComponent)
  },
  {
    path: 'profiles',
    loadComponent: () =>
      import('./pages/gait-profile/gait-profile.component').then(m => m.GaitProfileComponent)
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports/reports.component').then(m => m.ReportsComponent)
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then(m => m.SettingsComponent)
  },
  { path: '**', redirectTo: '' }
];
