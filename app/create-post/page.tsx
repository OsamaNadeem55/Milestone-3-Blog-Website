"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Ensure you have a Button component

type NewPost = {
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
};

const CreatePost: React.FC = () => {
  const [formData, setFormData] = useState<NewPost>({
    title: "",
    category: "",
    excerpt: "",
    image: "",
    date: "",
    readTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New post submitted:", formData);
    // Here you would handle form submission to your backend API
  };

  return (
    <div className="container py-16 px-8 max-w-4xl mx-auto">
      <h1 className="text-gradient text-4xl font-bold text-center mb-8">
        Create New Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8 bg-gray-900 p-8 rounded-lg shadow-lg">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-100 mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-100 mb-2">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-100 mb-2">Excerpt</label>
          <textarea
            id="excerpt"
            name="excerpt"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-100 mb-2">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-100 mb-2">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="readTime" className="block text-sm font-medium text-gray-100 mb-2">Read Time</label>
          <input
            type="text"
            id="readTime"
            name="readTime"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            value={formData.readTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-center">
          <Button type="submit" variant="outline" className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-300">Create Post</Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
