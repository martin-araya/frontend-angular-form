import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CVForm } from '../interfaces/cv-form.interface';

@Injectable({
  providedIn: 'root'
})
export class CvFormService {
  // En un ambiente real, esta URL vendría de un archivo de ambiente
  private apiUrl = 'http://api.ejemplo.com/cv';

  constructor(private http: HttpClient) { }

  submitCV(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
