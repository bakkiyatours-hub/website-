import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappNumber = '919626488887';
  const message = "Hi! I'm interested in learning more about your tours.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center group bk-fab"
      aria-label="Chat with us"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  );
}
