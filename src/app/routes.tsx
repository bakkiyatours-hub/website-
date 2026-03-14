import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { InboundTours } from './pages/InboundTours';
import { OutboundTours } from './pages/OutboundTours';
import { Packages } from './pages/Packages';
import { PackageDetail } from './pages/PackageDetail';
import { CustomTour } from './pages/CustomTour';
import { Team } from './pages/Team';
import { Vehicles } from './pages/Vehicles';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { TamilNaduHeritageTour } from './pages/TamilNaduHeritageTour';
import { RootLayout } from './components/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'inbound-tours', Component: InboundTours },
      { path: 'outbound-tours', Component: OutboundTours },
      { path: 'packages', Component: Packages },
      { path: 'packages/:id', Component: PackageDetail },
      { path: 'tamil-nadu-unesco', Component: TamilNaduHeritageTour },
      { path: 'custom-tour', Component: CustomTour },
      { path: 'team', Component: Team },
      { path: 'vehicles', Component: Vehicles },
      { path: 'gallery', Component: Gallery },
      { path: 'blog', Component: Blog },
      { path: 'blog/:id', Component: BlogPost },
      { path: 'contact', Component: Contact },
    ],
  },
]);
