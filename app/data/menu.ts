export type MenuItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
};

export type MenuCategory = {
    category: string;
    items: MenuItem[];
};

export const MENU_ITEMS: MenuCategory[] = [
    {
        category: "Vegetables",
        items: [
            {
                id: "veg1",
                name: "Shahi Paneer",
                price: 320,
                image: "/assets/shahi paneer.png",
                description: "Cottage cheese simmered in a rich, creamy tomato and cashew gravy.",
            },
            {
                id: "veg2",
                name: "Matar Paneer",
                price: 280,
                image: "/assets/matarpaneer.png",
                description: "Peas and cottage cheese in a spiced tomato-based sauce.",
            },
            {
                id: "veg3",
                name: "Kadai Paneer",
                price: 300,
                image: "/assets/kadai paneer.png",
                description: "Paneer tossed with bell peppers and freshly ground spices.",
            },
            {
                id: "veg4",
                name: "Aloo Gobhi",
                price: 180,
                image: "/assets/aloo_gobhi.jpg",
                description: "Classic cauliflower and potato stir-fry with ginger and cumin.",
            },
            {
                id: "veg5",
                name: "Aloo Jeera",
                price: 160,
                image: "/assets/aloo_jeera.jpg",
                description: "Potatoes sautéed with cumin seeds and mild spices.",
            },
            {
                id: "veg6",
                name: "Aloo Bhujia",
                price: 150,
                image: "/assets/aloo_bhujia.jpg",
                description: "Traditional crispy potato fry.",
            },
        ],
    },
    {
        category: "Daal",
        items: [
            {
                id: "daal1",
                name: "Dal Makhani",
                price: 250,
                image: "/assets/dal_makhani.jpg",
                description: "Black lentils slow-cooked overnight with butter and cream.",
            },
            {
                id: "daal2",
                name: "Arhar Daal",
                price: 180,
                image: "/assets/arhar_daal.jpg",
                description: "Yellow lentils tempered with cumin, garlic, and chilies.",
            },
            {
                id: "daal3",
                name: "Rajma Masala",
                price: 220,
                image: "/assets/rajma_masala.jpg",
                description: "Kidney beans cooked in a thick, spicy onion-tomato gravy.",
            },
            {
                id: "daal4",
                name: "Chole",
                price: 200,
                image: "/assets/chole.jpg",
                description: "Chickpeas cooked with authentic spices from Amritsar.",
            },
        ],
    },
    {
        category: "Breads",
        items: [
            {
                id: "bread1",
                name: "Garlic Butter Naan",
                price: 60,
                image: "/assets/garlic-butter-naan.jpg",
                description: "Soft leavened bread topped with garlic and butter.",
            },
            {
                id: "bread2",
                name: "Lachha Paratha",
                price: 50,
                image: "/assets/lachhaparatha.png",
                description: "Multi-layered whole wheat flatbread.",
            },
            {
                id: "bread3",
                name: "Tandoori Roti",
                price: 25,
                image: "/assets/tandooriroti.png",
                description: "Whole wheat bread baked in a clay oven.",
            },
            {
                id: "bread4",
                name: "Romali Roti",
                price: 40,
                image: "/assets/romaliroti.png",
                description: "Thin, soft flatbread folded like a handkerchief.",
            },
        ],
    },
    {
        category: "Rice",
        items: [
            {
                id: "rice1",
                name: "Paneer Biryani",
                price: 280,
                image: "/assets/paneerbiryani.png",
                description: "Fragrant basmati rice layered with spiced paneer and herbs.",
            },
            {
                id: "rice2",
                name: "Jeera Rice",
                price: 150,
                image: "/assets/jeera_rice.jpg",
                description: "Basmati rice tempered with cumin seeds.",
            },
            {
                id: "rice3",
                name: "Veg Pulao",
                price: 180,
                image: "/assets/veg_pulao.jpg",
                description: "Rice cooked with mixed vegetables and mild spices.",
            },
        ],
    },
    {
        category: "Cravings",
        items: [
            {
                id: "snack1",
                name: "Paneer Burger",
                price: 120,
                image: "/assets/paneer burger.png",
                description: "Crunchy paneer patty in a soft bun with sauces.",
            },
            {
                id: "snack2",
                name: "Momos",
                price: 100,
                image: "/assets/momos.png",
                description: "Steamed dumplings filled with savory vegetables.",
            },
            {
                id: "snack3",
                name: "Samosa",
                price: 30,
                image: "/assets/samosa.jpg",
                description: "Crispy pastry filled with spiced potatoes and peas.",
            },
            {
                id: "snack4",
                name: "Chola Kulcha",
                price: 150,
                image: "/assets/chola kulcha.png",
                description: "Soft leavened bread served with spicy peas curry.",
            },
        ],
    },
    {
        category: "Thali",
        items: [
            {
                id: "thali1",
                name: "Premium Thaal",
                price: 450,
                image: "/assets/thaal.png",
                description: "A grand feast with multiple curries, breads, rice, and dessert.",
            },
            {
                id: "thali2",
                name: "Rajasthani Thali",
                price: 400,
                image: "/assets/rajasthanithali.jpeg",
                description: "Authentic platter from Rajasthan.",
            },
        ],
    },
    {
        category: "Dessert",
        items: [
            {
                id: "sweet1",
                name: "Rasmalai",
                price: 120,
                image: "/assets/rasmalai_bowl.png",
                description: "Soft cheese dumplings in sweetened saffron milk.",
            },
            {
                id: "sweet2",
                name: "Gulab Jamun",
                price: 80,
                image: "/assets/gulab jamun.png",
                description: "Deep-fried milk solids soaked in rose sugar syrup.",
            },
            {
                id: "sweet3",
                name: "Jalebi",
                price: 60,
                image: "/assets/jalebi.png",
                description: "Crispy pretzel-shaped sweets steeped in syrup.",
            },
            {
                id: "sweet4",
                name: "Rasgulla",
                price: 80,
                image: "/assets/rasgulla.png",
                description: "Spongy cottage cheese balls in light sugar syrup.",
            },
        ],
    },
];
