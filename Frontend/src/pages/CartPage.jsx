import { useState } from 'react';
import CartItem from '../components/CartItem';

const initialItems = [
    { id: 1, name: 'Speed T-Shirt', quantity: 1, image: 'https://nobero.com/cdn/shop/files/black_8f2f0bb4-9293-4d6f-a179-c918d7602384.jpg?v=1712232992' },
];

function CartPage() {
    const [cartItems, setCartItems] = useState(initialItems);

    const handleQuantityChange = (id, qty) => {
        setCartItems(items =>
            items.map(item => (item.id === id ? { ...item, quantity: qty } : item))
        );
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * 1000, 0); // assume 1000₹ per item

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
            ))}
            <p className="mt-4 font-medium">Subtotal: ₹{subtotal}</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded">Checkout</button>
        </div>
    );
}

export default CartPage;
