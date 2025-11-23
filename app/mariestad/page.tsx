'use client';

import Link from 'next/link';

export default function MariestadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-lg shadow-xl p-12">
          <div className="text-6xl mb-6">🏆</div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mariestad
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            More information about place and time coming soon!
          </p>
          
          <div className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-lg text-gray-700 mb-2">
              Mer informasjon om tid og sted kommer snart!
            </p>
          </div>
          
          <Link 
            href="/"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            ← Back to Home / Tilbake til Hjem
          </Link>
        </div>
      </div>
    </div>
  );
}