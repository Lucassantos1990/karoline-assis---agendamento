import React, { useState, useMemo } from 'react';
import { Professional, Service, Appointment } from '../../types';
import { TIME_SLOTS } from '../../constants';
import { ArrowLeft } from 'lucide-react';

interface ServiceTimeSelectorProps {
  professional: Professional;
  services: Service[];
  existingAppointments: Appointment[];
  onSelect: (service: Service, date: Date) => void;
  onBack?: () => void;
}

const ServiceTimeSelector: React.FC<ServiceTimeSelectorProps> = ({ professional, services, existingAppointments, onSelect, onBack }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });

  const availableDates = useMemo(() => {
    const dates = [];
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    for (let i = 0; i < 7; i++) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }, []);

  const isSlotBooked = (time: string): boolean => {
    const [hours, minutes] = time.split(':').map(Number);
    const slotDateTime = new Date(selectedDate);
    slotDateTime.setHours(hours, minutes, 0, 0);

    return existingAppointments.some(app =>
      app.professional.id === professional.id &&
      app.date.getTime() === slotDateTime.getTime()
    );
  };

  const handleTimeSelect = (time: string) => {
    if (selectedService) {
      const [hours, minutes] = time.split(':').map(Number);
      const finalDate = new Date(selectedDate);
      finalDate.setHours(hours, minutes, 0, 0);
      onSelect(selectedService, finalDate);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {onBack && (
          <button onClick={onBack} className="flex items-center gap-2 text-pink-500 hover:text-pink-700 mb-6 font-semibold">
            <ArrowLeft size={18} /> Voltar
          </button>
      )}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-600">Agendar com {professional.name}</h2>
        <p className="text-gray-500">Selecione o serviço e o melhor horário para você.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-pink-800 mb-4">1. Escolha o Serviço</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                  selectedService?.id === service.id
                    ? 'bg-pink-500 text-white border-pink-500 shadow-md'
                    : 'bg-white hover:bg-pink-50 border-gray-200'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{service.name}</span>
                  <span className="text-sm">R$ {service.price.toFixed(2)}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-pink-800 mb-4">2. Escolha a Data e Hora</h3>
          <div className="mb-4 bg-gray-50 p-2 rounded-lg">
            <div className="flex justify-around">
              {availableDates.map(date => (
                <button
                  key={date.toISOString()}
                  onClick={() => setSelectedDate(date)}
                  className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                    selectedDate.toDateString() === date.toDateString()
                      ? 'bg-pink-500 text-white'
                      : 'hover:bg-pink-100'
                  }`}
                >
                  <span className="text-xs">{date.toLocaleDateString('pt-BR', { weekday: 'short' })}</span>
                  <span className="font-bold text-lg">{date.getDate()}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map(time => {
              const isBooked = isSlotBooked(time);
              const isDisabled = !selectedService || isBooked;
              return (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  disabled={isDisabled}
                  className={`p-3 rounded-lg text-center font-semibold transition-colors ${
                    isDisabled
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-pink-100 text-pink-800 hover:bg-pink-500 hover:text-white'
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
          {!selectedService && <p className="text-center text-sm text-red-500 mt-4">Por favor, selecione um serviço para ver os horários.</p>}
        </div>
      </div>
    </div>
  );
};

export default ServiceTimeSelector;