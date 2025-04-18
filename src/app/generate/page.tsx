'use client';
import { useState } from 'react';
import FormField from '@/components/FormField';
import { FaBuilding, FaEnvelope, FaGlobe, FaUser } from 'react-icons/fa';

interface FormData {
  nom: string;
  email: string;
  site: string;
  entreprise: string;
}

export default function GeneratePage() {
  const [form, setForm] = useState<FormData>({ 
    nom: '', 
    email: '', 
    site: '', 
    entreprise: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ 
      ...form, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = () => {
    if (!form.nom || !form.email || !form.site || !form.entreprise) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
  };

  const content = `Mentions légales\n\nNom : ${form.nom}\nEntreprise : ${form.entreprise}\nEmail : ${form.email}\nSite : ${form.site}\n...`;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-indigo-600">🔐 Générateur de mentions légales</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField icon={FaUser} label="Nom" name="nom" value={form.nom} onChange={handleChange} />
          <FormField icon={FaBuilding} label="Entreprise" name="entreprise" value={form.entreprise} onChange={handleChange} />
          <FormField icon={FaEnvelope} label="Email" name="email" value={form.email} onChange={handleChange} />
          <FormField icon={FaGlobe} label="Site Web" name="site" value={form.site} onChange={handleChange} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">📝 Aperçu :</h2>
          <textarea
            className="w-full h-64 p-4 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-mono border-2 border-gray-300 dark:border-gray-700"
            value={content}
            readOnly
          />
        </div>

        <div className="flex space-x-4 mt-6">
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            onClick={() => {navigator.clipboard.writeText(content); alert("Contenu copié !");}}
          >
            Copier
          </button>
          <button
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            onClick={() => {window.print();}}
          >
            Exporter en PDF
          </button>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transform hover:scale-105 transition duration-300"
          >
            Générer les mentions légales
          </button>
        </div>
      </div>
    </main>
  );
}
