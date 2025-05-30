import '../App.css'

function Product({ product: { img, id, name, price } }) {
    return (
        <div className="col-4">
            <div className="product-details">
                <div className="product-img">
                    <img src={img} alt={name} />
                </div>
                <div className="product-content">
                    <h2>{id}</h2>
                    <p>{name}</p>
                    <strong>{price}</strong>
                </div>
            </div>
        </div>
    );
}

export default Product;