import React, { useState } from 'react';
import '../components/Products.css'

function ProductForm() {
    const [product, setProduct] = useState({ name: '', price: '' });
    const [productList, setProductList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddProduct = (e) => {
        e.preventDefault();

        if (!product.name || !product.price) return;

        const newProduct = {
            name: product.name,
            price: product.price
        };

        setProductList((prev) => [...prev, newProduct]);
        setProduct({ name: '', price: '' });
    };

    return (
        <div className="for-bg max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold text-white text-center">Add Product</h2>

            <form onSubmit={handleAddProduct} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                    className="text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="text-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="w-full bg-orange-400 text-white py-2 rounded-lg transition duration-200"
                >
                    Add Product
                </button>
            </form>

            {productList.length > 0 && (
                <div>
                    <h3 className="text-lg font-medium mt-6 text-white">Added Products:</h3>
                    <ul className="mt-2 space-y-2">
                        {productList.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md"
                            >
                                <span>{item.name}</span>
                                <span className="text-green-600 font-semibold">{item.price}$</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ProductForm;