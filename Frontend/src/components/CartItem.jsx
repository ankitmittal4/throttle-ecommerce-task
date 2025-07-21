function CartItem({ item, onQuantityChange }) {
    return (
        <div className="flex items-center justify-between border p-2 rounded mb-2">
            <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">Qty:
                    <input
                        type="number"
                        value={item.quantity}
                        className="ml-2 w-12 border px-1 rounded"
                        min="1"
                        onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
                    />
                </p>
            </div>
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
        </div>
    );
}

export default CartItem;
