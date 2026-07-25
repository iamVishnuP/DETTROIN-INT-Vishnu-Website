import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import Container from '../common/Container';
import SectionBadge from '../common/SectionBadge';
import GalleryItem from './GalleryItem';
import GalleryLightbox from './GalleryLightbox';

// Local gallery images from src/assets/images
import img1 from '../../assets/images/hero2.webp';
import img2 from '../../assets/images/hero3.webp';
import img3 from '../../assets/images/hero4.webp';
import img4 from '../../assets/images/hero5.webp';
import img5 from '../../assets/images/hero6.webp';
import img6 from '../../assets/images/parent4.webp';
import img7 from '../../assets/images/parent5.webp';
import img8 from '../../assets/images/parent6.webp';

const galleryData = [
  { image: img1, caption: 'School Assembly & Morning Reflection', category: 'Campus Life' },
  { image: img2, caption: 'Interactive Classroom Learning Session', category: 'Academics' },
  { image: img3, caption: 'Outdoor Sports & Physical Development', category: 'Sports & Athletics' },
  { image: img4, caption: 'Annual Cultural Day & Stage Performances', category: 'Events & Culture' },
  { image: img5, caption: 'Science & Innovation Exhibition Demonstrations', category: 'STEM & Labs' },
  { image: img6, caption: 'Art, Craft & Creative Expression Workshop', category: 'Creative Arts' },
  { image: img7, caption: 'Primary School Activity & Play Corner', category: 'Early Years' },
  { image: img8, caption: 'Student Leadership & Collaborative Projects', category: 'Student Life' },
];

/**
 * GallerySection Component
 * Interactive campus photography grid featuring a full-screen lightbox modal viewer.
 */
const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };

  return (
    <section id="gallery" className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <SectionBadge icon={Camera}>Campus Gallery</SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Experience Life at Excellence International School
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Take a visual tour through our vibrant campus life, modern academic facilities, sports events, and creative workshops in Aligarh.
          </p>
        </div>

        {/* 4-Column Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {galleryData.map((item, index) => (
            <GalleryItem
              key={index}
              item={item}
              onClick={() => handleOpenLightbox(index)}
              delay={index * 0.08}
            />
          ))}
        </div>

      </Container>

      {/* Lightbox Fullscreen Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        items={galleryData}
        selectedIndex={selectedIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};

export default GallerySection;
