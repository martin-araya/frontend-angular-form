import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CvFormService } from '../../services/cv-form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent {
  // Definimos las áreas disponibles
  areas = ['informatica', 'mecanica', 'administracion'];

  // Inicializamos el formulario
  cvForm: FormGroup;
  selectedFile: File | null = null;
isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cvFormService: CvFormService
  ) {
    // Creamos el formulario con validaciones
    this.cvForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      area: ['', Validators.required],
      cvFile: [null, Validators.required]
    });
  }

  // Método para manejar la selección de archivo
  onFileSelect(event: any): void {
    const file = event.target.files[0];
    this.selectedFile = file;
    this.cvForm.patchValue({ cvFile: file });
  }
  showError(fieldName: string): boolean {
    const field = this.cvForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  getErrorMessage(fieldName: string): string {
    const field = this.cvForm.get(fieldName);
    if (!field) return '';

    if (field.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (field.hasError('email')) {
      return 'Email no válido';
    }
    if (field.hasError('minlength')) {
      return 'Nombre demasiado corto';
    }
    return '';
  }

  // Método para enviar el formulario
  // isLoading is already declared and initialized above
  successMessage = '';
  errorMessage = '';

  onSubmit(): void {
    if (this.cvForm.valid && this.selectedFile) {
      this.isLoading = true;
      const formData = new FormData();
      // ... (resto del código de formData igual) ...

      this.cvFormService.submitCV(formData).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.successMessage = 'CV enviado exitosamente';
          this.cvForm.reset();
          this.selectedFile = null;
          setTimeout(() => this.successMessage = '', 3000);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = 'Error al enviar el CV. Por favor, intenta nuevamente.';
          setTimeout(() => this.errorMessage = '', 3000);
        }
      });
    }
  }

}
