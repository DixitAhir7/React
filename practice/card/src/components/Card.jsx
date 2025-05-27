import '../App.css'
const Obj = {
    img: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg',
    name: 'Nature gateway',
    price: 5000000
}

function Card() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card-img">
                        <img src={Obj.img} alt="" />
                    </div>
                    <div className="content">
                        <h3>{Obj.name}</h3>
                        <p>{Obj.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card