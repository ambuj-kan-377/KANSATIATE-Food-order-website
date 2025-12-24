'use client';

import Image from 'next/image';
import { MENU_ITEMS, MenuItem } from '@/app/data/menu';
import Navbar from '@/components/Navbar';
import { useCart } from '@/app/context/CartContext';
// import { toast } from 'sonner'; // Optional: if available, otherwise use simple alert or just context

export default function MenuPage() {
    const { addToCart } = useCart();

    const handleAdd = (item: MenuItem) => {
        addToCart(item);
        // Optional: visual feedback
        // alert(`Added to cart: ${item.name}`); 
    };

    return (
        <main className="min-h-screen bg-gray-50 pb-20 pt-20">
            {/* pt-20 added to account for sticky navbar height */}

            <Navbar />

            {/* Hero / Header Section */}
            <div className="relative overflow-hidden h-[25vh] min-h-[250px] flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="/assets/healthy_food_full_bg.png"
                        alt="Menu Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-[2px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
                    <h1
                        className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest drop-shadow-2xl"
                        style={{ fontFamily: 'var(--font-sadana-square)' }}
                    >
                        Our <span className="text-[#FF9933]">Menu</span>
                    </h1>
                    <div className="w-16 h-1 bg-[#FF9933] mx-auto rounded-full"></div>
                    <p className="text-gray-200 text-base md:text-lg font-medium tracking-wide max-w-2xl mx-auto leading-relaxed">
                        Experience the art of vegetarian dining with our curated selection of authentic flavors.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {MENU_ITEMS.map((category) => (
                    <section key={category.category} className="mb-20">
                        {/* Category Title */}
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-3xl font-bold text-[#0F3F4C] border-l-4 border-[#FF9933] pl-4">
                                {category.category}
                            </h2>
                            <div className="h-[1px] bg-gray-200 flex-1"></div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                            <span className="text-white font-medium text-sm tracking-widest uppercase">Quick Add</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#FF9933] transition-colors">
                                                {item.name}
                                            </h3>
                                            <span className="text-lg font-bold text-[#138808]">₹{item.price}</span>
                                        </div>

                                        <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-1">
                                            {item.description}
                                        </p>

                                        <button
                                            onClick={() => handleAdd(item)}
                                            className="w-full py-3 bg-[#FF9933] text-white font-bold rounded-xl hover:bg-[#e68a2e] active:scale-95 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-sm"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
