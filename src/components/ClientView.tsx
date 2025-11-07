import React, { useState } from 'react';
import { Appointment, Professional, Service, ClientDetails } from '../types';
import { PROFESSIONALS, SERVICES } from '../constants';
import ServiceTimeSelector from './client/ServiceTimeSelector';
import BookingForm from './client/BookingForm';
import ConfirmationModal from './client/ConfirmationModal';

interface ClientViewProps {
  addAppointment: (appointment: Appointment) => void;
  existingAppointments: Appointment[];
}

const ClientView: React.FC<ClientViewProps> = ({ addAppointment, existingAppointments }) => {
  const [step, setStep] = useState(1);
  const [selectedProfessional] = useState<Professional | null>(PROFESSIONALS[0]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  const handleSelectServiceTime = (service: Service, date: Date) => {
    setSelectedService(service);
    setSelectedDate(date);
    setStep(2);
  };

  const handleBookingSubmit = (details: ClientDetails) => {
    if (selectedProfessional && selectedService && selectedDate) {
      const newAppointment: Appointment = {
        id: Date.now().toString(),
        professional: selectedProfessional,
        service: selectedService,
        date: selectedDate,
        clientName: details.name,
        clientEmail: details.email,
        clientPhone: details.phone,
      };
      addAppointment(newAppointment);
      setConfirmedAppointment(newAppointment);
      setShowConfirmation(true);
    }
  };

  const handleGoBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const resetFlow = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedDate(null);
    setShowConfirmation(false);
    setConfirmedAppointment(null);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ServiceTimeSelector
            professional={selectedProfessional!}
            services={SERVICES}
            existingAppointments={existingAppointments}
            onSelect={handleSelectServiceTime}
          />
        );
      case 2:
        return (
          <BookingForm
            professional={selectedProfessional!}
            service={selectedService!}
            date={selectedDate!}
            onSubmit={handleBookingSubmit}
            onBack={handleGoBack}
          />
        );
      default:
        return (
           <ServiceTimeSelector
            professional={selectedProfessional!}
            services={SERVICES}
            existingAppointments={existingAppointments}
            onSelect={handleSelectServiceTime}
          />
        );
    }
  };

  return (
    <div>
       <h2 className="text-3xl font-bold text-pink-600 mb-2 text-center">Faça seu Agendamento</h2>
      <p className="text-gray-500 mb-8 text-center">Simples, rápido e fácil.</p>
      {renderStep()}
      {showConfirmation && confirmedAppointment && (
        <ConfirmationModal
          appointment={confirmedAppointment}
          onClose={resetFlow}
        />
      )}
    </div>
  );
};

export default ClientView;