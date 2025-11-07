
import React, { useState } from 'react';
import { Appointment } from './types';
import { INITIAL_APPOINTMENTS } from './constants';
import ClientView from './components/ClientView';
import AdminView from './components/AdminView';
import Header from './components/Header';
import AdminLogin from './components/AdminLogin';

const App: React.FC = () => {
  const [page, setPage] = useState<'client' | 'login' | 'admin'>('client');
  const [appointments, setAppointments] = useState<Appointment[]>(INITIAL_APPOINTMENTS);

  const addAppointment = (newAppointment: Appointment) => {
    setAppointments(prev => [...prev, newAppointment].sort((a, b) => a.date.getTime() - b.date.getTime()));
  };
  
  const updateAppointment = (updatedAppointment: Appointment) => {
    setAppointments(prev => prev.map(app => app.id === updatedAppointment.id ? updatedAppointment : app).sort((a, b) => a.date.getTime() - b.date.getTime()));
  };

  const cancelAppointment = (appointmentId: string) => {
    setAppointments(prev => prev.filter(app => app.id !== appointmentId));
  };

  const handleLoginSuccess = () => {
    setPage('admin');
  };

  const handleLogout = () => {
    setPage('client');
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
      case 'admin':
        return (
          <AdminView 
            appointments={appointments}
            onUpdate={updateAppointment}
            onCancel={cancelAppointment}
          />
        );
      case 'client':
      default:
        return (
          <ClientView
            addAppointment={addAppointment}
            existingAppointments={appointments}
          />
        );
    }
  };


  return (
    <div className="bg-pink-50 min-h-screen text-gray-800 flex flex-col">
      <Header page={page} onLogout={handleLogout} />
      <main className="container mx-auto p-4 md:p-8 flex-grow">
        {renderPage()}
      </main>
      <footer className="text-center p-4 text-pink-400 text-sm">
        {page === 'client' && (
            <button onClick={() => setPage('login')} className="text-sm text-gray-500 hover:text-pink-500 mb-2 transition-colors">
                Acesso Restrito
            </button>
        )}
        <p>&copy; {new Date().getFullYear()} Karoline Assis. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
