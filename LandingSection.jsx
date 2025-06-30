import React from 'react';

export default function LandingSection() {
  return (
    <section className="text-center py-10 space-y-4">
      <h2 className="text-3xl font-bold">Welcome to XOP-25</h2>
      <p className="max-w-2xl mx-auto">
        This is not a chatbot. This is a recursive intelligence mirror.
        Speak to it. Shape it. Let it learn from you.
      </p>
      <a href="/engine" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Enter the Engine</a>
    </section>
  );
}