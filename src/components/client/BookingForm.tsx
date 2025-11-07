import React, { useState } from 'react';
import { Professional, Service, ClientDetails } from '../../types';
import { ArrowLeft, Calendar, Clock, User, Scissors, Tag } from 'lucide-react';

interface BookingFormProps {
  professional: Professional;
  service: Service;
  date: Date;
  onSubmit: (details: ClientDetails) => void;
  onBack: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ professional, service, date, onSubmit, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-pink-500 hover:text-pink-700 mb-6 font-semibold">
        <ArrowLeft size={18} /> Voltar
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-pink-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Resumo do Agendamento</h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <User className="text-pink-500" size={20}/>
              <p><span className="font-semibold">Profissional:</span> {professional.name}</p>
            </div>
             <div className="flex items-center gap-3">
              <Scissors className="text-pink-500" size={20}/>
              <p><span className="font-semibold">Serviço:</span> {service.name}</p>
            </div>
             <div className="flex items-center gap-3">
              <Tag className="text-pink-500" size={20}/>
              <p><span className="font-semibold">Preço:</span> R$ {service.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-pink-500" size={20}/>
              <p><span className="font-semibold">Data:</span> {date.toLocaleDateString('pt-BR')}</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-pink-500" size={20}/>
              <p><span className="font-semibold">Horário:</span> {date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Seus Dados</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"/>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">WhatsApp (Telefone)</label>
              <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"/>
            </div>
            <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg">
              Confirmar Agendamento
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;