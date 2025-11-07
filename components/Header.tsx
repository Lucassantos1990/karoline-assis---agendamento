
import React from 'react';
import { LogOut } from 'lucide-react';

interface HeaderProps {
  page: 'client' | 'login' | 'admin';
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ page, onLogout }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-pink-500 tracking-wider">
          {page === 'admin' ? 'Área Administrativa' : 'Karolina Assis'}
        </h1>
        {page === 'admin' && (
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-colors duration-300 bg-pink-500 text-white shadow hover:bg-pink-600"
          >
            <LogOut size={16} />
            Sair
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
