import { useState } from "react";

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Gallery images for different categories
    const galleryItems = [
        {
            id: 1,
            category: "corporate",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Corporate Security",
            location: "Salt Lake City"
        },
        {
            id: 2,
            category: "residential",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Residential Complex",
            location: "New Town"
        },
        {
            id: 3,
            category: "events",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Event Security",
            location: "Park Street"
        },
        {
            id: 4,
            category: "landmarks",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Howrah Bridge",
            location: "Howrah"
        },
        {
            id: 5,
            category: "corporate",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Office Complex",
            location: "Sector V"
        },
        {
            id: 6,
            category: "landmarks",
            image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Victoria Memorial",
            location: "Maidan"
        },
        {
            id: 7,
            category: "residential",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Apartment Security",
            location: "Ballygunge"
        },
        {
            id: 8,
            category: "events",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            title: "Educational Institution",
            location: "Jadavpur"
        }
    ];

    const categories = [
        { id: "all", name: "All" },
        { id: "corporate", name: "Corporate" },
        { id: "residential", name: "Residential" },
        { id: "events", name: "Events" },
        { id: "landmarks", name: "Landmarks" }
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
                        Our <span className="text-gradient">Service</span> Gallery
                    </h2>
                    <p className="font-poppins font-normal text-gray-600 dark:text-dimWhite text-[18px] leading-[30.8px] max-w-[600px] mx-auto">
                        Explore our security services across various locations in Kolkata and see how we protect what matters most.
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

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-[20px] bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="font-poppins font-semibold text-white text-[18px] mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="font-poppins text-white/80 text-[14px]">
                                        📍 {item.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-[20px] p-8">
                        <h3 className="font-poppins font-semibold text-[28px] text-gray-900 dark:text-white mb-4">
                            Need Security for Your Location?
                        </h3>
                        <p className="font-poppins text-gray-600 dark:text-dimWhite text-[18px] mb-6 max-w-[500px] mx-auto">
                            Contact us today to discuss your security requirements and get a customized solution for your property.
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
