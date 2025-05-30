import '../App.css'

function Product({ item }) {
    return (
        <div className="row">
            <div className="product-details">
                <div className="product-img">
                    <img src={item.img} alt={item.name} />
                </div>
                <div className="product-content">
                    <h2>{item.id}</h2>
                    <p>{item.name}</p>
                    <strong>{item.price}</strong>
                </div>
            </div>
        </div>
    );
}

export default Product;
