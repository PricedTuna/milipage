export interface User {
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  carrera: string;
  password: string;
  numeroCuenta: string;
  fechaNacimiento: string;
  topicosEnfermeria: {
    "Enfermería laboral": number;
    "Enfermería basada en la evidencia": number;
    "Gestión y calidad de los servicios de enfermería": number;
    "Emprendedurismo y responsabilidad social": number;
    "Proyectos de investigación en enfermería": number;
    "Enfermería en desastres y emergencias sanitarias": number;
  };
}
