import products from "./Product.json";
import Product from "./components/Products";
import '../src/App.css'

function App() {
    return (
        <div className="products">
            <div className="container row">
                {products.map((item) => (
                    <Product product={item} />
                ))}
            </div>
        </div>
    );
}

export default App;