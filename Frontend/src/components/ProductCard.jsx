function ProductCard({ product, onClick }) {
    return (
        <div
            className="border p-4 rounded hover:shadow cursor-pointer"
            onClick={onClick}
        >
            <div className="flex flex-col items-center">
                <img src={product.image} alt={product.name} className="mb-2 h-96 w-[70%]" />
                <p>{product.name}</p>
            </div>
        </div>
    );
}

export default ProductCard;
