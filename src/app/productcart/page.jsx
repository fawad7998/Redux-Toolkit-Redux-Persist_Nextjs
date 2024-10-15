import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, deleteallProduct } from '@/shared/redux/slices/slices';
import { FaShoppingCart } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const ProductCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.Product || []);

    const handleDelete = (item) => {
        dispatch(deleteProduct(item));
    };

    const handleClearCart = () => {
        dispatch(deleteallProduct());
    };

    const products = [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        { id: 3, name: 'Product 3', price: '$30' },
    ];

    const handleAddToCart = (product) => {
        const newProduct = { ...product, uniqueId: uuidv4() };
        dispatch(addProduct(newProduct)); // Fixed action dispatch
    };

    const itemCount = cartItems.length;

    return (
        <div className="container mx-auto p-4">
            <div className='flex justify-center text-4xl font-bold'>Redux Toolkit</div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <Link href="/cart">

                    <FaShoppingCart size={24} />
                    {itemCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
                            {itemCount}
                        </span>
                    )}

                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-500">{product.price}</p>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Cart</h2>
                {cartItems.length > 0 ? (
                    <ul className="bg-gray-100 rounded p-4">
                        {cartItems.map((item) => (
                            <li key={item.uniqueId} className="py-2 border-b last:border-b-0">
                                <div className='flex justify-between'>
                                    <div>{item.name}</div>
                                    {item.price}
                                </div>
                                <button onClick={() => handleDelete(item)} className="text-red-500">Delete</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                )}
            </div>
            <button onClick={handleClearCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                Clear Cart
            </button>
        </div>
    );
};

export default ProductCart;
