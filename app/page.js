"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const { user, isLoaded } = useUser();
  const createUser = useMutation(api.user.createUser);
  const router = useRouter();
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked && isLoaded) {
      if (user) {
        toast.success("You were already signed in");
        router.push("/dashboard");
      } else {
        router.push("/sign-up");
      }
    }
  }, [buttonClicked, isLoaded, user]);

  useEffect(() => {
    user && CheckUser();
  }, [user]);

  const CheckUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
      userName: user?.fullName,
      upgrade: false,
    });
    console.log(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-100 text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 md:px-20 py-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="ClariNotes Logo"
            width={200}
            height={180}
          />
          {/*<h1 className="text-2xl font-bold tracking-wide text-gray-800">ClariNotes</h1>*/}
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium ml-[-95px]">
          <Link href="/features" className="hover:underline">
            Features
          </Link>
          <Link href="/solution" className="hover:underline">
            Solution
          </Link>
          <Link href="/testimonials" className="hover:underline">
            Testimonials
          </Link>
        </nav>
        <Button
          className="bg-black text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 hover:scale-105 transition-all duration-200"
          onClick={() => setButtonClicked(true)}
        >
          Get Started
        </Button>
      </header>

      {/* Hero Section */}
      <main className="text-center mt-20 px-6 md:px-20">
        <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-4">
          Turn Complexity into Clarity.
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
          AI Notes That <span className="text-blue-600">Clarify</span>, Not{" "}
          <span className="text-red-500">Complicate</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-700 text-md md:text-lg">
          Upload your PDF. Ask questions. Get instant AI-powered summaries and
          answers—built for how you read and think.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button
            onClick={() => setButtonClicked(true)}
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Button>
          <Link href="/learn-more">
            <Button className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200">
              Learn More
            </Button>
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section
        id="features"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 px-6 md:px-20 text-center"
      >
        <div className="bg-white shadow-md rounded-xl hover:scale-105 p-6">
          <h3 className="text-lg font-semibold text-blue-600">
            📚 Intelligent PDF Parsing
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Extract text and meaning from documents instantly.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl hover:scale-105 p-6">
          <h3 className="text-lg font-semibold text-blue-600">
            ✨ AI-Powered Summaries
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Summarize entire documents or specific pages with state-of-the-art
            LLMs.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl hover:scale-105 p-6">
          <h3 className="text-lg font-semibold text-blue-600">
            ❓ Ask Anything
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Chat with your PDFs—get answers based on document content.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl hover:scale-105 p-6">
          <h3 className="text-lg font-semibold text-blue-600">
            🧠 Page-by-Page Insights
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Navigate with clarity, page by page, with highlights and context.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl hover:scale-105 p-6">
          <h3 className="text-lg font-semibold text-blue-600">
            ☁️ Cloud-Based & Secured
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Access your documents anytime, anywhere—safely stored.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl hover:scale-105 p-6">
          <h3 className="text-lg font-semibold text-blue-600">
            🔍 Smart Search
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Don't just read, instantly locate what you need.
          </p>
        </div>
      </section>
    </div>
  );
}
