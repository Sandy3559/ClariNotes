export default function LearnMore() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12 md:px-20">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-500">
        Why ClariNotes?
      </h1>
      <p className="text-lg max-w-3xl mx-auto mb-10 text-center text-gray-700">
        ClariNotes is designed to help you cut through the noise and focus on
        what truly matters— understanding. Whether you're reading academic
        papers, business reports, or legal documents, ClariNotes provides
        instant summaries, question answering, and intelligent navigation with
        the power of AI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="bg-purple-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-purple-700">
            Who is it for?
          </h2>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>📚 Students & Researchers</li>
            <li>💼 Professionals handling reports</li>
            <li>👥 Teams that collaborate on documentation</li>
            <li>🧠 Anyone who wants to learn faster & smarter</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700">
            What can it do?
          </h2>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>📄 Convert PDFs into summarized notes</li>
            <li>🧠 Answer questions directly from your document</li>
            <li>⚡ Get instant, clear, and accurate insights</li>
            <li>☁️ Store and access your files from anywhere</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-md text-gray-600 mb-4">
          Ready to experience ClariNotes?
        </p>
        <a href="/dashboard">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Start Now
          </button>
        </a>
      </div>
    </div>
  );
}
