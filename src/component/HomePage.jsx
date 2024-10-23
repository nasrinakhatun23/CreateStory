import React, { useState } from 'react';

const HomePage = () => {
  const [story, setStory] = useState('');
  const [error, setError] = useState('');

  const handleStorySubmit = (e) => {
    e.preventDefault();
    if (story.length < 3) {
      setError('Story must be at least 3 characters long.');
    } else {
      setError('');
      alert('Story submitted successfully!');
      setStory('');
    }
  }; 

  return (
    <div className="container mx-auto p-4 mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Create Your Story</h2>
      <form onSubmit={handleStorySubmit} className="max-w-md mx-auto">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Write your story..."
        ></textarea>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-700"
        >
          Submit Story
        </button>
      </form>
    </div>
  );
};

export default HomePage;
