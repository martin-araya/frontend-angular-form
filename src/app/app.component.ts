import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvFormComponent } from "./components/cv-form/cv-form.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CvFormComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-angular-form';
}
