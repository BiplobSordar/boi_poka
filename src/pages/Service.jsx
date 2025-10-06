

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-accent">
   

      <section className="bg-gradient-to-r from-primary to-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We empower readers, authors, and publishers with tools that make books come alive.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">What We Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
   
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-6">📚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Discovery Engine</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI-powered recommendations learn your taste and suggest books you’ll love — not just bestsellers.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-6">👥</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Reader Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Join book clubs, write reviews, join live author Q&As, and connect with thousands of passionate readers.
              </p>
            </div>

         
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-6">✍️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Author Support Program</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your book featured, access marketing tools, and connect with readers without a traditional publisher.
              </p>
            </div>

        
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile App</h3>
              <p className="text-gray-600 leading-relaxed">
                Read, track, and share your reading journey on the go with our iOS and Android apps.
              </p>
            </div>

        
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-6">📅</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Reading Challenges</h3>
              <p className="text-gray-600 leading-relaxed">
                Join monthly reading goals, earn badges, and compete with friends in fun literary challenges.
              </p>
            </div>

   
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-6">🎁</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Subscription Box</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive a handpicked book, custom bookmark, and tea blend delivered monthly to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 bg-gradient-to-r from-secondary to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dive In?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join over 500,000 readers who trust BookHub to find their next great read.
          </p>
          <button className="bg-white text-secondary font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition transform hover:scale-105">
            Start Reading Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;