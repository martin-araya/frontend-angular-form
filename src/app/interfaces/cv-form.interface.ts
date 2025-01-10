export interface CVForm {
  fullName: string;
  email: string;
  area: "informatica" | "mecanica" | "administracion";
  cvFile: File | null;
}
