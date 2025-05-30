import products from "./Product.json";
import Product from "./components/Products";
import '../src/App.css'

function App() {
    return (
        <div className="container">
            <div className="products row">
                {products.map((item) => (
                    <Product key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default App;
