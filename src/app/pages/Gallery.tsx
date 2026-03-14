import { useState } from 'react';
import { X } from 'lucide-react';

const tajMahalImage =
  'https://images.unsplash.com/photo-1623811852177-611cda0b372f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB0YWolMjBtYWhhbCUyMGluZGlhJTIwdHJhdmVsfGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const singaporeImage =
  'https://images.unsplash.com/photo-1727880676753-9ba90268d3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjBza3lsaW5lJTIwbWFyaW5hJTIwYmF5fGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const dubaiImage =
  'https://images.unsplash.com/photo-1735320864933-601d2cac9371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmolMjBraGFsaWZhJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MjQ1OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080';
const thailandImage =
  'https://images.unsplash.com/photo-1663899755806-fec4cf21ec62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWwlMjBwYXJhZGlzZXxlbnwxfHx8fDE3NzI0NTk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080';
const sriLankaImage =
  'https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGthbmR5JTIwdGVtcGxlfGVufDF8fHx8MTc3MjQ1OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080';
const malaysiaImage =
  'https://images.unsplash.com/photo-1553383398-c40c57291c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxheXNpYSUyMHBldHJvbmFzJTIwdG93ZXJzfGVufDF8fHx8MTc3MjQ0NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080';
const keralaImage =
  'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrd2F0ZXJzJTIwa2VyYWxhJTIwaW5kaWF8ZW58MXx8fHwxNzcyNDU5ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080';
const goldenTempleImage =
  'https://images.unsplash.com/photo-1698380776884-25c2e6e426e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjB0ZW1wbGUlMjBhbXJpdHNhciUyMGluZGlhfGVufDF8fHx8MTc3MjQ1OTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080';

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const photos = [
    { image: tajMahalImage, title: 'Taj Mahal', category: 'India', location: 'Agra' },
    {
      image: singaporeImage,
      title: 'Marina Bay Sands',
      category: 'Singapore',
      location: 'Singapore',
    },
    { image: dubaiImage, title: 'Burj Khalifa', category: 'UAE', location: 'Dubai' },
    { image: thailandImage, title: 'Phi Phi Islands', category: 'Thailand', location: 'Phuket' },
    { image: sriLankaImage, title: 'Temple of Tooth', category: 'Sri Lanka', location: 'Kandy' },
    {
      image: malaysiaImage,
      title: 'Petronas Towers',
      category: 'Malaysia',
      location: 'Kuala Lumpur',
    },
    { image: keralaImage, title: 'Kerala Backwaters', category: 'India', location: 'Alleppey' },
    { image: goldenTempleImage, title: 'Golden Temple', category: 'India', location: 'Amritsar' },
    { image: tajMahalImage, title: 'Red Fort', category: 'India', location: 'Delhi' },
    {
      image: singaporeImage,
      title: 'Gardens by the Bay',
      category: 'Singapore',
      location: 'Singapore',
    },
    { image: thailandImage, title: 'Bangkok Temple', category: 'Thailand', location: 'Bangkok' },
    { image: sriLankaImage, title: 'Sigiriya Rock', category: 'Sri Lanka', location: 'Sigiriya' },
  ];

  const categories = ['All', 'India', 'Singapore', 'UAE', 'Thailand', 'Sri Lanka', 'Malaysia'];

  const filteredPhotos =
    selectedCategory === 'All'
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal>
          <h1 className="text-5xl mb-4">Photo Gallery</h1>
          <p className="text-xl">Moments captured from our unforgettable journeys</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-8" data-reveal>
            {filteredPhotos.length} photos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-reveal-stagger>
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setLightboxImage(photo.image)}
                data-reveal
                className="group relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition bk-hover-lift"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg mb-1">{photo.title}</h3>
                    <p className="text-sm text-gray-200">{photo.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12" data-reveal>
            Video Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            {[
              { title: 'Golden Triangle Tour Experience', location: 'India' },
              { title: 'Singapore City Highlights', location: 'Singapore' },
              { title: 'Thailand Beach Paradise', location: 'Thailand' },
            ].map((video, index) => (
              <div key={index} data-reveal className="bg-white rounded-2xl shadow-lg overflow-hidden bk-hover-lift">
                <div className="relative h-56 bg-gray-200 flex items-center justify-center">
                  <div className="absolute inset-0">
                    <img
                      src={
                        index === 0 ? tajMahalImage : index === 1 ? singaporeImage : thailandImage
                      }
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  <button className="relative z-10 bg-white/90 hover:bg-white w-16 h-16 rounded-full flex items-center justify-center transition">
                    <svg
                      className="w-8 h-8 text-purple-600 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
