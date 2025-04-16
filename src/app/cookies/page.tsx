'use client';
export default function CookiesPage() {
  const cookieText = `Politique de cookies\n\nNotre site utilise des cookies pour vous offrir une meilleure expérience utilisateur.\n\nLes cookies utilisés sont strictement nécessaires ou à des fins d’analyse et de marketing.\n...`;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">🍪 Politique de cookies</h1>
        <textarea className="w-full h-96 p-4 rounded-md bg-gray-100 dark:bg-gray-800 text-sm" value={cookieText} readOnly />
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          onClick={() => navigator.clipboard.writeText(cookieText)}
        >Copier</button>
      </div>
    </main>
  );
}
