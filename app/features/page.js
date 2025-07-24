"use client";
import React from "react";

export default function Features() {
  const features = [
    {
      icon: "📚",
      title: "Intelligent PDF Parsing",
      description:
        "Instantly extract text and structure from any document, enabling fast navigation and understanding.",
    },
    {
      icon: "✨",
      title: "AI-Powered Summaries",
      description:
        "Receive concise and context-aware summaries tailored to your reading flow and goals.",
    },
    {
      icon: "❓",
      title: "Ask Anything",
      description:
        "Interact with your PDFs through natural questions. Get precise, page-aware answers.",
    },
    {
      icon: "🧠",
      title: "Page-by-Page Insights",
      description:
        "Navigate PDFs with ease—understand context, highlights, and key insights for every page.",
    },
    {
      icon: "☁️",
      title: "Cloud-Synced & Secure",
      description:
        "All documents are safely stored, easily accessible from any device, at any time.",
    },
    {
      icon: "🔍",
      title: "Smart Search",
      description:
        "Don’t scroll endlessly. Search for exact answers within your PDFs in seconds.",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
        Key Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center"
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-blue-600 mt-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
