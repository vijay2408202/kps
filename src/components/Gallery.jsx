import { useState } from "react";
import { useScrollAnimation } from "../hooks/useCountAnimation";

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { elementRef: galleryRef, isVisible: galleryVisible } = useScrollAnimation();

    // Gallery images showcasing recent works, equipment, and staff
    const galleryItems = [
        {
            id: 1,
            category: "equipment",
            image: "https://images.unsplash.com/photo-1591123720164-de1348028a82?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Metal Detection System",
            location: "Corporate Office - Salt Lake"
        },
        {
            id: 2,
            category: "staff",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Professional Security Guard",
            location: "Residential Complex - New Town"
        },
        {
            id: 3,
            category: "recent-work",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Corporate Security Setup",
            location: "IT Park - Sector V"
        },
        {
            id: 4,
            category: "equipment",
            image: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "CCTV Surveillance System",
            location: "Shopping Mall - Park Street"
        },
        {
            id: 5,
            category: "staff",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Security Team on Duty",
            location: "Event Venue - Maidan"
        },
        {
            id: 6,
            category: "recent-work",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Residential Security Installation",
            location: "Apartment Complex - Ballygunge"
        },
        {
            id: 7,
            category: "equipment",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Access Control System",
            location: "Office Building - Rajarhat"
        },
        {
            id: 8,
            category: "staff",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Female Security Officer",
            location: "Educational Institution - Jadavpur"
        },
        {
            id: 9,
            category: "recent-work",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Event Security Management",
            location: "Conference Hall - Central Kolkata"
        },
        {
            id: 10,
            category: "equipment",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Radio Communication Device",
            location: "Security Control Room"
        },
        {
            id: 11,
            category: "staff",
            image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Security Guard at Entry",
            location: "Hospital - EM Bypass"
        },
        {
            id: 12,
            category: "recent-work",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Construction Site Security",
            location: "Building Project - Howrah"
        }
    ];

    const categories = [
        { id: "all", name: "All" },
        { id: "equipment", name: "Equipment" },
        { id: "staff", name: "Our Team" },
        { id: "recent-work", name: "Recent Work" }
    ];

    const filteredItems = selectedCategory === "all"
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <section id="gallery" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-10 sm:mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="font-poppins font-semibold text-[28px] xs:text-[32px] sm:text-[40px] lg:text-[48px] text-gray-900 dark:text-white leading-[36px] xs:leading-[40px] sm:leading-[50px] lg:leading-[76.8px] mb-4 sm:mb-6">
                        Our <span className="text-gradient">Work</span> Gallery
                    </h2>
                    <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[14px] xs:text-[16px] sm:text-[18px] leading-[22px] xs:leading-[26px] sm:leading-[30.8px] max-w-full sm:max-w-[600px] mx-auto px-2 sm:px-0">
                        Explore our professional security equipment, dedicated team members, and recent successful installations across Kolkata.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-10 sm:mb-12 px-2 sm:px-0">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-[8px] sm:rounded-[10px] font-poppins font-medium text-[12px] xs:text-[14px] sm:text-[16px] transition-all duration-300 ${selectedCategory === category.id
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Pinterest-style Gallery Grid */}
                <div
                    ref={galleryRef}
                    className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4 lg:gap-6 space-y-3 sm:space-y-4 lg:space-y-6 transition-all duration-1000 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="break-inside-avoid group relative overflow-hidden rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] mb-3 sm:mb-4 lg:mb-6"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    style={{
                                        height: window.innerWidth >= 1024
                                            ? `${Math.floor(Math.random() * 150) + 200}px` // Random heights for desktop Pinterest effect
                                            : window.innerWidth >= 640
                                                ? `${Math.floor(Math.random() * 100) + 180}px` // Smaller random heights for tablets
                                                : `200px` // Fixed height for mobile for consistency
                                    }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 right-2 sm:right-3 lg:right-4">
                                        <h3 className="font-poppins font-semibold text-white text-[12px] xs:text-[14px] sm:text-[16px] mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="font-poppins text-white/80 text-[10px] xs:text-[11px] sm:text-[12px]">
                                            📍 {item.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] xs:text-[11px] sm:text-xs font-medium text-white backdrop-blur-sm ${item.category === 'equipment' ? 'bg-blue-500/80' :
                                        item.category === 'staff' ? 'bg-green-500/80' :
                                            'bg-purple-500/80'
                                        }`}>
                                        {item.category === 'equipment' ? 'Equipment' :
                                            item.category === 'staff' ? 'Team' : 'Work'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 sm:mt-16 px-2 sm:px-0">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-4 sm:p-6 lg:p-8">
                        <h3 className="font-poppins font-semibold text-[20px] xs:text-[24px] sm:text-[28px] text-gray-900 dark:text-white mb-3 sm:mb-4">
                            Need Professional Security Solutions?
                        </h3>
                        <p className="font-poppins text-gray-600 dark:text-dimWhite text-[14px] xs:text-[16px] sm:text-[18px] mb-4 sm:mb-6 max-w-full sm:max-w-[500px] mx-auto">
                            Contact us today to discuss your security requirements and see how our professional team and advanced equipment can protect your property.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium text-[14px] xs:text-[16px] sm:text-[18px] px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] sm:rounded-[12px] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Get a Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
