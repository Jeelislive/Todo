import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-pink-500">
      {/* Main Content */ }
      <main className="container mx-auto px-4 py-20 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-8">Todo Dashboard</h1>
        <p className="text-lg mb-6">Welcome to your Todo dashboard. Here you can manage your tasks and stay organized.</p>
        <p className='font-bold m-3'>Add Your personal TODO Here</p>
        <Link to="/todo" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Let's Start</Link>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Todo App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
