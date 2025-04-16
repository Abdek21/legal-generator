'use client'; // Permet de dire à Next.js que ce fichier doit être traité côté client

import React, { useState } from 'react';

const CgvPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');

  // Logique pour générer les CGV
  const generateCGV = () => {
    // Exemple simplifié de génération des CGV
    return `Conditions Générales de Vente de ${companyName}, situé à ${address}.`;
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Générateur de CGV</h1>
        <p className="mb-6 text-lg">Créez vos Conditions Générales de Vente personnalisées</p>
        <div>
          <input
            type="text"
            placeholder="Nom de l'entreprise"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mb-4 p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mb-4 p-2 border rounded-md"
          />
          <button
            onClick={generateCGV}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700"
          >
            Générer les CGV
          </button>
        </div>
        <div className="mt-6">
          <textarea
            value={generateCGV()}
            readOnly
            className="w-full p-4 border rounded-md bg-gray-100 dark:bg-gray-800"
          />
        </div>
      </div>
    </main>
  );
};

export default CgvPage;
