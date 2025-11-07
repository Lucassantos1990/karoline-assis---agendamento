import { Professional, Service, Appointment } from './types';

export const PROFESSIONALS: Professional[] = [
  {
    id: 1,
    name: 'Karoline Assis',
    specialty: 'Especialista em Cílios e Sobrancelhas',
    imageUrl: 'https://picsum.photos/seed/karoline/300/300',
  },
];

export const SERVICES: Service[] = [
  { id: 1, name: 'Extensão de cílios Volume brasileiro', duration: 120, price: 125.00 },
  { id: 2, name: 'Volume Brasileirão', duration: 120, price: 145.00 },
  { id: 3, name: 'Volume egípcio express', duration: 90, price: 135.00 },
  { id: 4, name: 'Volume egípcio', duration: 120, price: 155.00 },
  { id: 5, name: 'Volume sirena', duration: 120, price: 140.00 },
  { id: 6, name: 'Volume fox', duration: 120, price: 150.00 },
  { id: 7, name: 'Volume luxo', duration: 150, price: 190.00 },
  { id: 8, name: 'Volume Karoline Assis', duration: 150, price: 170.00 },
  { id: 9, name: 'Design personalizado simples', duration: 30, price: 40.00 },
  { id: 10, name: 'Design personalizado com henna', duration: 45, price: 55.00 },
  { id: 11, name: 'Brow Lamination', duration: 60, price: 90.00 },
  { id: 12, name: 'Limpeza de pele', duration: 75, price: 100.00 },
  { id: 13, name: 'Hidra gloss/lips', duration: 60, price: 90.00 },
];


export const INITIAL_APPOINTMENTS: Appointment[] = [
  
];

export const TIME_SLOTS = [
  '15:00', '16:00', '17:00', '18:00', '19:00'
];