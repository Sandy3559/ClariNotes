"use client";
import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Riya Sharma",
      role: "Law Student",
      feedback:
        "ClariNotes changed how I study case files. Summaries are accurate, and I love asking direct questions to the PDFs!",
      avatar: "/avatar1.png",
    },
    {
      name: "Arjun Mehta",
      role: "Product Manager",
      feedback:
        "I upload technical documentation, and ClariNotes gives me page-wise highlights that save hours of reading.",
      avatar: "/avatar2.png",
    },
    {
      name: "Sneha Iyer",
      role: "Freelance Researcher",
      feedback:
        "The AI summaries and smart search are a godsend. No more Ctrl+F nightmares.",
      avatar: "/avatar3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
        What Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <p className="text-gray-700 text-sm mb-4 italic">“{t.feedback}”</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
