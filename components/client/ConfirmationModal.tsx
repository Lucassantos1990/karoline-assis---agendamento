
import React from 'react';
import { Appointment } from '../../types';
import { CheckCircle, Mail, MessageSquare } from 'lucide-react';

interface ConfirmationModalProps {
  appointment: Appointment;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ appointment, onClose }) => {
    const handleWhatsAppClick = () => {
        const message = `Olá! Confirmação de agendamento no salão Karolina Assis para ${appointment.service.name} com ${appointment.professional.name} no dia ${appointment.date.toLocaleDateString('pt-BR')} às ${appointment.date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${appointment.clientPhone}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const emailSubject = encodeURIComponent(`Confirmação de Agendamento - Karolina Assis`);
    const emailBody = encodeURIComponent(
        `Olá, ${appointment.clientName}!\n\nSeu agendamento para o serviço "${appointment.service.name}" foi confirmado com sucesso.\n\nDetalhes do Agendamento:\n- Profissional: ${appointment.professional.name}\n- Data: ${appointment.date.toLocaleDateString('pt-BR')}\n- Horário: ${appointment.date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}\n\nEstamos ansiosos para te receber!\n\nAtenciosamente,\nEquipe Karolina Assis.`
    );
    const mailtoLink = `mailto:${appointment.clientEmail}?subject=${emailSubject}&body=${emailBody}`;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all scale-100">
        <div className="mx-auto bg-pink-100 rounded-full h-16 w-16 flex items-center justify-center mb-4">
            <CheckCircle className="text-pink-500" size={40} />
        </div>
        <h2 className="text-2xl font-bold text-pink-600 mb-2">Agendamento Confirmado!</h2>
        <p className="text-gray-600 mb-6">
          Olá, <strong>{appointment.clientName}</strong>! Seu horário está marcado.
        </p>
        
        <div className="bg-pink-50 text-left p-4 rounded-lg space-y-2 mb-6">
            <p><strong>Serviço:</strong> {appointment.service.name}</p>
            <p><strong>Profissional:</strong> {appointment.professional.name}</p>
            <p><strong>Data:</strong> {appointment.date.toLocaleDateString('pt-BR')}</p>
            <p><strong>Horário:</strong> {appointment.date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>

        <p className="text-sm text-gray-500 mb-4">Guarde a confirmação com você:</p>
        <div className="flex justify-center space-x-4 mb-8">
            <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors">
                <Mail size={18}/> E-mail
            </a>
            <button onClick={handleWhatsAppClick} className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                <MessageSquare size={18}/> WhatsApp
            </button>
        </div>
        
        <button
          onClick={onClose}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
