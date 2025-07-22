import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

const products = [
    { id: 1, name: 'Speed T-Shirt', category: 'T-shirt', image: 'https://nobero.com/cdn/shop/files/black_8f2f0bb4-9293-4d6f-a179-c918d7602384.jpg?v=1712232992' },
    { id: 2, name: 'Turbo Jacket', category: 'Jackets', image: 'https://www.voganow.com/cdn/shop/files/BBGJ-1108-014_2_copy.jpg?v=1752318542' },
    { id: 3, name: 'Drift Cap', category: 'Caps', image: 'https://m.media-amazon.com/images/I/519mAeaRtSL.jpg' },
];

function ProductPage() {
    const [query, setQuery] = useState('');
    const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="p-6">
            <SearchBar query={query} setQuery={setQuery} />
            {query && filtered.length === 0 && <p>No results found.</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filtered.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
