import { Routes } from '@angular/router';
import { CvFormComponent } from './components/cv-form/cv-form.component';

export const routes: Routes = [
  { path: '', component: CvFormComponent },
  { path: '**', redirectTo: '' }
];
