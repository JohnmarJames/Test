import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about who we are and what we do.
        </p>
      </header>
      
      <section className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-8">
          Our mission is to provide the best service and products to our customers. We strive to exceed expectations and continuously improve our offerings to meet the needs of our community.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-700">
          We are a dedicated team of professionals who are passionate about our work. Our team members bring a diverse set of skills and experiences to the table, all working together to achieve our common goals.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
