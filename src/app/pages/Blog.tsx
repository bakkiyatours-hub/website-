import { Link } from 'react-router';
import { Calendar, User, ArrowRight } from 'lucide-react';
import breadcumbsVideo from '../../assets/breadcumbsvideo.mp4';

const tajMahalImage =
  'https://images.unsplash.com/photo-1623811852177-611cda0b372f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB0YWolMjBtYWhhbCUyMGluZGlhJTIwdHJhdmVsfGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const singaporeImage =
  'https://images.unsplash.com/photo-1727880676753-9ba90268d3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjBza3lsaW5lJTIwbWFyaW5hJTIwYmF5fGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const sriLankaImage =
  'https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGthbmR5JTIwdGVtcGxlfGVufDF8fHx8MTc3MjQ1OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080';
const dubaiImage =
  'https://images.unsplash.com/photo-1735320864933-601d2cac9371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmolMjBraGFsaWZhJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MjQ1OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080';
const thailandImage =
  'https://images.unsplash.com/photo-1663899755806-fec4cf21ec62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWwlMjBwYXJhZGlzZXxlbnwxfHx8fDE3NzI0NTk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080';
const keralaImage =
  'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrd2F0ZXJzJTIwa2VyYWxhJTIwaW5kaWF8ZW58MXx8fHwxNzcyNDU5ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Must-Visit Places in India for First-Time Travelers',
      excerpt:
        "Discover the most iconic destinations that showcase India's rich cultural heritage, from the Taj Mahal to the backwaters of Kerala.",
      image: tajMahalImage,
      category: 'Travel Tips',
      author: 'Priya Sharma',
      date: 'March 1, 2026',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Complete Singapore Visa Guide for Indian Citizens',
      excerpt:
        'Everything you need to know about obtaining a Singapore tourist visa, including requirements, processing time, and helpful tips.',
      image: singaporeImage,
      category: 'Visa Guide',
      author: 'Raj Kumar',
      date: 'February 28, 2026',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: "Exploring Sri Lanka's Cultural Triangle",
      excerpt:
        'A comprehensive guide to visiting Anuradhapura, Polonnaruwa, and Sigiriya - the ancient kingdoms of Sri Lanka.',
      image: sriLankaImage,
      category: 'Destination Guide',
      author: 'Sarah Chen',
      date: 'February 25, 2026',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Best Time to Visit Dubai: Month-by-Month Guide',
      excerpt:
        'Plan your Dubai vacation with our comprehensive weather guide and festival calendar to make the most of your trip.',
      image: dubaiImage,
      category: 'Travel Tips',
      author: 'Mohamed Ali',
      date: 'February 22, 2026',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Thailand Beach Holiday: Phuket vs Krabi',
      excerpt:
        "Comparing Thailand's two most popular beach destinations to help you choose the perfect island escape.",
      image: thailandImage,
      category: 'Destination Guide',
      author: 'Aisha Khan',
      date: 'February 20, 2026',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Spiritual India: A Journey Through Sacred Sites',
      excerpt:
        "Explore India's most revered spiritual destinations including Varanasi, Rishikesh, and the Golden Temple.",
      image: tajMahalImage,
      category: 'Spiritual Travel',
      author: 'Lakshmi Iyer',
      date: 'February 18, 2026',
      readTime: '9 min read',
    },
    {
      id: 7,
      title: 'Kerala Backwaters: Complete Travel Guide',
      excerpt:
        "Everything you need to know about experiencing Kerala's famous backwaters, from houseboats to the best villages to visit.",
      image: keralaImage,
      category: 'Destination Guide',
      author: 'Arjun Menon',
      date: 'February 15, 2026',
      readTime: '10 min read',
    },
    {
      id: 8,
      title: 'Festival Tourism in India: Holi, Diwali & More',
      excerpt:
        "Experience India's vibrant festivals with our guide to the best celebrations and how to participate respectfully.",
      image: tajMahalImage,
      category: 'Cultural',
      author: 'Priya Sharma',
      date: 'February 12, 2026',
      readTime: '6 min read',
    },
    {
      id: 9,
      title: 'Budget Travel Tips for Southeast Asia',
      excerpt:
        'How to explore Thailand, Malaysia, and Singapore on a budget without missing out on amazing experiences.',
      image: thailandImage,
      category: 'Travel Tips',
      author: 'David Wilson',
      date: 'February 10, 2026',
      readTime: '8 min read',
    },
  ];

  const categories = [
    'All Posts',
    'Travel Tips',
    'Visa Guide',
    'Destination Guide',
    'Spiritual Travel',
    'Cultural',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <video autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover">
            <source src={breadcumbsVideo} type="video/mp4" />
          </video>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl mb-4">Travel Blog</h1>
          <p className="text-xl">Expert tips, destination guides, and travel inspiration</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-200 hover:bg-purple-600 hover:text-white transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8">Featured Post</h2>
          <Link to={`/blog/${blogPosts[0].id}`} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl mb-4 group-hover:text-purple-600 transition">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 group-hover:gap-4 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-purple-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">1</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
              2
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
              3
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8">
            Get the latest travel tips and destination guides delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
