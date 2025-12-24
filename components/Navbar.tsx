"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, User, X, Trash2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartCount, items, removeFromCart, cartTotal } = useCart();

    const handleSignUpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Welcome to Kansatiate!");
        setIsModalOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 h-20 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

                    {/* Logo & Brand */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative h-20 w-20 transition-transform group-hover:scale-105">
                            <Image
                                src="/assets/logo.png"
                                alt="KANSATIATE"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span
                            className="text-5xl font-bold tracking-[0.15em] text-[#0F3F4C] transition-colors"
                            style={{ fontFamily: 'var(--font-sadana-square)' }}
                        >
                            KANSATIATE
                        </span>
                    </Link>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">

                        {/* Cart Icon */}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 text-gray-600 hover:text-[#E63946] transition-colors"
                        >
                            <ShoppingBag className="h-6 w-6" />
                            <span className="absolute top-1 right-0 h-4 w-4 bg-[#FF9933] text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                                {cartCount}
                            </span>
                        </button>

                        {/* Sign Up Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#0F3F4C] text-[#0F3F4C] font-bold hover:bg-[#0F3F4C] hover:text-white transition-all shadow-sm hover:shadow-md active:scale-95 text-sm uppercase tracking-wider"
                        >
                            <User className="h-4 w-4" />
                            <span>Sign Up</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Cart Sidebar */}
            <div className={`fixed inset-0 z-[60] overflow-hidden transition-all duration-300 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsCartOpen(false)}
                />
                <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    {/* Cart Header */}
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                        <h2 className="text-2xl font-bold text-[#0F3F4C]" style={{ fontFamily: 'var(--font-sadana-square)' }}>Your Cart</h2>
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {items.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                                <ShoppingBag className="h-16 w-16 text-gray-300" />
                                <p className="text-lg font-medium text-gray-500">Your cart is empty</p>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="text-[#FF9933] font-bold hover:underline"
                                >
                                    Browse Menu
                                </button>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.cartId} className="flex gap-4">
                                    <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-bold text-[#1A1A1A]">{item.name}</h3>
                                            <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="font-bold text-[#138808]">₹{item.price}</span>
                                            <button
                                                onClick={() => removeFromCart(item.cartId)}
                                                className="text-xs font-bold text-red-500 hover:text-red-600 uppercase tracking-wide"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Cart Footer */}
                    {items.length > 0 && (
                        <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-4">
                            <div className="flex items-center justify-between text-lg font-bold text-[#0F3F4C]">
                                <span>Total</span>
                                <span>₹{cartTotal}</span>
                            </div>
                            <button className="w-full py-3.5 bg-[#FF9933] hover:bg-[#e68a2e] text-white font-bold rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Sign Up Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsModalOpen(false)}
                    />

                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-in fade-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="text-center mb-8">
                            <h3
                                className="text-3xl font-bold text-[#0F3F4C] mb-2"
                                style={{ fontFamily: 'var(--font-sadana-square)' }}
                            >
                                Join KANSATIATE
                            </h3>
                            <p className="text-gray-500">Sign up to order delicious food.</p>
                        </div>

                        <form onSubmit={handleSignUpSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 98765 43210"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 outline-none transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-[#0F3F4C] hover:bg-[#092831] text-white font-bold rounded-xl transition-all shadow-lg active:scale-95 mt-4"
                            >
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
