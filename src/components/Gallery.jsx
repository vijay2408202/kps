import { useState } from "react";

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

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
        <section id="gallery" className="py-16 px-6 sm:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-900 dark:text-white xs:leading-[76.8px] leading-[66.8px] mb-6">
                        Our <span className="text-gradient">Work</span> Gallery
                    </h2>
                    <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[18px] leading-[30.8px] max-w-[600px] mx-auto">
                        Explore our professional security equipment, dedicated team members, and recent successful installations across Kolkata.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-[10px] font-poppins font-medium text-[16px] transition-all duration-300 ${selectedCategory === category.id
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Pinterest-style Gallery Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="break-inside-avoid group relative overflow-hidden rounded-[20px] bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] mb-6"
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
                                        height: `${Math.floor(Math.random() * 150) + 200}px` // Random heights for Pinterest effect
                                    }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="font-poppins font-semibold text-white text-[16px] mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="font-poppins text-white/80 text-[12px]">
                                            📍 {item.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm ${item.category === 'equipment' ? 'bg-blue-500/80' :
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
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-[20px] p-8">
                        <h3 className="font-poppins font-semibold text-[28px] text-gray-900 dark:text-white mb-4">
                            Need Professional Security Solutions?
                        </h3>
                        <p className="font-poppins text-gray-600 dark:text-dimWhite text-[18px] mb-6 max-w-[500px] mx-auto">
                            Contact us today to discuss your security requirements and see how our professional team and advanced equipment can protect your property.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium text-[18px] px-8 py-4 rounded-[12px] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
