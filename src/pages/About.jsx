
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-accent">
   

    
      <section className="bg-gradient-to-r from-primary to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Our Story</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            BookHub was born from a simple idea: every book has a soul, and every reader deserves to find theirs.
          </p>
        </div>
      </section>

    
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe books are more than paper and ink — they’re gateways to new worlds, mirrors of our humanity, and bridges between cultures. BookHub exists to connect readers with stories that change lives.
            </p>
          </div>

 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Curated Collections</h3>
              <p className="text-gray-600">
                Every book is handpicked by our team of bibliophiles. No algorithm — just heart.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community First</h3>
              <p className="text-gray-600">
                Join discussions, leave reviews, and connect with fellow readers who feel the same way you do.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Supporting Authors</h3>
              <p className="text-gray-600">
                We champion indie and emerging writers. Your reads help them thrive.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">Meet Our Bookish Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Elena Rodriguez", role: "Chief Curator", bio: "Former librarian with 15+ years reading everything from haikus to sci-fi epics." },
              { name: "Marcus Chen", role: "Tech Whisperer", bio: "Built BookHub’s backend while sipping chai and listening to jazz." },
              { name: "Aisha Patel", role: "Community Lead", bio: "Started as a reviewer. Now runs our global book clubs." }
            ].map((member, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-gray-600">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;