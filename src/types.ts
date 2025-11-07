export interface Professional {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  name: string;
  duration: number; // in minutes
  price: number;
}

export interface Appointment {
  id: string;
  professional: Professional;
  service: Service;
  date: Date;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
}

export interface ClientDetails {
  name: string;
  email: string;
  phone: string;
}