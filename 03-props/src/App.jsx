import products from "./Product.json";
import Product from "./components/Products";

function App() {
    return (
        <div className="container">
            <div className="products row">
                {products.map((item) => (
                    <Product product={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default App;