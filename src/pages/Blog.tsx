
import React from "react";
import { Newspaper, TrendingUp, UsersRound, Pencil } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Demo blog data
const blogPosts = [
  {
    id: 1,
    title: "Top Construction Trends in 2025",
    category: "Industry Trends",
    icon: TrendingUp,
    summary:
      "Discover the emerging trends shaping the future of construction—smart buildings, eco-friendly materials, modular construction, and digital project management.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    date: "April 18, 2025",
    author: "Anil Sharma",
  },
  {
    id: 2,
    title: "Project Update: Lumbini Gardens Township",
    category: "Project Updates",
    icon: Pencil,
    summary:
      "Get the latest on our Lumbini Gardens Township project: milestones achieved in sustainable housing, green parks, and next-gen infrastructure.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    date: "April 10, 2025",
    author: "Sneha Bhatt",
  },
  {
    id: 3,
    title: "Dream Town Wins Construction Excellence Award",
    category: "Company News",
    icon: UsersRound,
    summary:
      "Dream Town Developers receives Nepal’s highest industry honor for outstanding quality, innovation, and safety standards.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    date: "March 30, 2025",
    author: "DTD Editorial",
  },
  {
    id: 4,
    title: "5 Tips for Planning Your Dream Home Construction",
    category: "Client Tips",
    icon: Newspaper,
    summary:
      "Practical guidance from our experts: budgeting, site selection, design, materials, and contractor selection for a smooth construction journey.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    date: "March 15, 2025",
    author: "Pradip Neupane",
  },
];

const BlogPage: React.FC = () => (
  <>
    <Header />
    <section className="min-h-screen bg-gray-50 py-12 section-padding">
      <div className="container max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Construction Insights & Company News</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the latest trends, updates, and guidance from Dream Town Developers. Stay informed with our expert perspectives and project news.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200 bg-white border animate-fade-in">
              <CardHeader className="p-0 rounded-t-lg overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
                <span className="absolute top-3 left-3 flex items-center px-3 py-1 bg-construction-primary text-white text-xs rounded-full font-semibold gap-2 shadow-sm">
                  <post.icon className="w-4 h-4" />
                  {post.category}
                </span>
              </CardHeader>
              <CardContent className="p-6 pb-4">
                <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                  <span>{post.date}</span>
                  ·
                  <span>By {post.author}</span>
                </div>
                <CardTitle className="mb-2 text-xl">
                  <Link to={`/blog/${post.id}`} className="hover:text-construction-secondary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-gray-700 mb-4">{post.summary}</p>
                <Link to={`/blog/${post.id}`} className="inline-block text-construction-primary font-medium hover:underline mt-auto">
                  Read more &rarr;
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default BlogPage;
