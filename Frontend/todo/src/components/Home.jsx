import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Welcome to our website!</h1>
                <p className="text-lg text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                    libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                    imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                    Mauris massa.
                </p>
            </div>
        </div>
    );
};

export default Home;
