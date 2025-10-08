import React from 'react';
import Image from 'next/image';

const ACCENT_BLUE = '#1E54A3';

export function ProjectGallery() {
  const projects = [
    {
      id: 1,
      title: "Premium Blue Metal Roofing",
      image: "/metal-roof-blue.png",
      description: "High-quality standing seam metal roof installation"
    },
    {
      id: 2,
      title: "Classic Silver Metal Roofing",
      image: "/metal-roof-silver.png",
      description: "Durable metal roofing with superior weather protection"
    },
    {
      id: 3,
      title: "Modern Residential Project",
      image: "/hero-home-farmhouse.jpg",
      description: "Complete roofing solution for modern homes"
    },
    {
      id: 4,
      title: "Quality Workmanship",
      image: "/gallery-inspection.jpg",
      description: "Expert installation with attention to detail"
    },
    {
      id: 5,
      title: "Shingle Roof Excellence",
      image: "/gallery-shingle-roof.jpg",
      description: "Premium IKO Dynasty shingle installation"
    },
    {
      id: 6,
      title: "Professional Craftsmanship",
      image: "/IMG_20250927_235510_860.jpg",
      description: "Built to last with premium materials"
    }
  ];

  return (
    <section className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">OUR WORKMANSHIP</h2>
          <p className="text-xl text-zinc-400">A look at some of the high-quality roofing projects we've completed across Southern New Brunswick</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-400 text-lg mb-6">
            Every roof we install is built to last a lifetime with superior craftsmanship and materials.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 text-white font-bold rounded-lg transition-colors hover:opacity-90"
            style={{ backgroundColor: ACCENT_BLUE }}
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
