import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const products = [
    { id: 1, name: 'Speed T-shirt', category: 'Tees', image: 'https://merchshop.in/wp-content/uploads/2019/10/React-JS-Pocket-logo-t-shirt-black-1.jpg' },
    { id: 2, name: 'Turbo Jacket', category: 'Jackets', image: 'https://merchshop.in/wp-content/uploads/2019/10/React-JS-Pocket-logo-t-shirt-black-1.jpg' },
    { id: 3, name: 'Drift Cap', category: 'Caps', image: 'https://merchshop.in/wp-content/uploads/2019/10/React-JS-Pocket-logo-t-shirt-black-1.jpg' },
];

function CategoryPage() {
    const navigate = useNavigate();
    const categoryItems = products.filter(p => p.category === 'Tees');

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">T-Shirt</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categoryItems.map(item => (
                    <ProductCard
                        key={item.id}
                        product={item}
                        onClick={() => navigate(`/product/${item.id}`)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
