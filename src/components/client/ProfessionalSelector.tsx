import React from 'react';
import { Professional } from '../../types';

interface ProfessionalSelectorProps {
  professionals: Professional[];
  onSelect: (professional: Professional) => void;
}

const ProfessionalSelector: React.FC<ProfessionalSelectorProps> = ({ professionals, onSelect }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-2">Nossas Profissionais</h2>
      <p className="text-gray-500 mb-8">Escolha com quem você deseja ser atendida.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {professionals.map(pro => (
          <div
            key={pro.id}
            onClick={() => onSelect(pro)}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <img src={pro.imageUrl} alt={pro.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-pink-800">{pro.name}</h3>
              <p className="text-pink-400">{pro.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSelector;