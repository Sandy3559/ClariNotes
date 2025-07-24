"use client";
import React from "react";

export default function Solution() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
        Our Solution
      </h2>
      <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6">
        <p>
          ClariNotes solves a simple but overwhelming problem: reading through
          complex documents, retaining key insights, and getting answers fast.
          PDFs weren’t built for real-time interaction, but you were.
        </p>
        <p>
          Our AI engine transforms passive reading into active learning. Whether
          it’s a research paper, legal contract, or product manual, ClariNotes
          parses, summarizes, and intelligently answers your questions.
        </p>
        <p>
          From students to professionals, anyone can now interact with
          information naturally. With beautiful UI, seamless uploads, and
          AI-powered features, we bring clarity to your documents—page by page.
        </p>
        <p className="text-blue-600 font-semibold">
          The future of reading is not scrolling—it's understanding. And it
          starts with ClariNotes.
        </p>
      </div>
    </div>
  );
}
