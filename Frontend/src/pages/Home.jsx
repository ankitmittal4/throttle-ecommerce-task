import CategoryButton from '../components/CategoryButton';

const categories = ['T-Shirt', 'Jackets', 'Caps', 'Accessories', 'Limited'];

function Home() {
    return (
        <div className="p-6">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-800">F1 Streetwear</h1>
                <p className="mt-2 text-lg text-gray-600">Race-inspired. Street-approved.</p>
                <button
                    className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
                    onClick={() => window.location.href = '/category/t-shirt'}
                >
                    View All Products
                </button>
            </div>

            {/* Category Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {categories.map((category, index) => (
                        <CategoryButton
                            key={category}
                            name={category}
                            isActive={index === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
