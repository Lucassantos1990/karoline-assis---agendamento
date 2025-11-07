
import React, { useState } from 'react';
import { Appointment } from '../types';
import { Trash2, Edit } from 'lucide-react';

interface AdminViewProps {
  appointments: Appointment[];
  onUpdate: (appointment: Appointment) => void;
  onCancel: (appointmentId: string) => void;
}

const AdminView: React.FC<AdminViewProps> = ({ appointments, onUpdate, onCancel }) => {
    const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(editingAppointment){
            onUpdate(editingAppointment);
            setEditingAppointment(null);
        }
    }
  
    const sortedAppointments = [...appointments].sort((a,b) => a.date.getTime() - b.date.getTime());

    if (editingAppointment) {
        return (
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                 <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Editar Agendamento</h2>
                 <form onSubmit={handleSave}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Data e Hora</label>
                        <input 
                            type="datetime-local" 
                            value={editingAppointment.date.toISOString().substring(0, 16)}
                            onChange={(e) => setEditingAppointment({ ...editingAppointment, date: new Date(e.target.value) })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-300"
                        />
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <button type="button" onClick={() => setEditingAppointment(null)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors">
                            Cancelar
                        </button>
                         <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                            Salvar Alterações
                        </button>
                    </div>
                 </form>
            </div>
        )
    }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Gerenciamento de Agendamentos</h2>
      <div className="space-y-4">
        {sortedAppointments.length > 0 ? (
          sortedAppointments.map(app => (
            <div key={app.id} className="bg-pink-50 p-4 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <p className="font-bold text-pink-800">{app.service.name} com {app.professional.name}</p>
                <p className="text-sm text-gray-600">{app.clientName} - {app.clientPhone}</p>
                <p className="text-sm text-gray-600 font-semibold">
                  {app.date.toLocaleDateString('pt-BR')} às {app.date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <div className="flex space-x-2 self-end md:self-center">
                 <button 
                  onClick={() => setEditingAppointment(app)}
                  className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                  aria-label="Editar"
                 >
                    <Edit size={18}/>
                </button>
                <button 
                  onClick={() => onCancel(app.id)}
                  className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                  aria-label="Cancelar"
                >
                    <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">Nenhum agendamento encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default AdminView;
