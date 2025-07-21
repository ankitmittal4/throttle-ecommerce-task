import { useNavigate } from 'react-router-dom';

function CategoryButton({ name, isActive }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (isActive) {
            navigate(`/category/${name.toLowerCase()}`);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`border text-lg rounded p-4 transition shadow-sm hover:shadow-md ${isActive ? 'bg-gray-100 hover:bg-gray-200 cursor-pointer' : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
        >
            {name}
        </button>
    );
}

export default CategoryButton;
