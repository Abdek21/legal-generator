'use client';
export default function RGPDPage() {
  const rgpdText = `Politique de confidentialité\n\nNous collectons vos données pour améliorer notre service.\n\nLes données sont conservées de manière sécurisée, et vous avez le droit de les consulter ou de les supprimer.\n...`;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">🔐 Politique de confidentialité</h1>
        <textarea className="w-full h-96 p-4 rounded-md bg-gray-100 dark:bg-gray-800 text-sm" value={rgpdText} readOnly />
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          onClick={() => navigator.clipboard.writeText(rgpdText)}
        >Copier</button>
      </div>
    </main>
  );
}