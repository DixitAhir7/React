import '../App.css'


function Card({img}) {
    const Obj ={
        img:img,
        name : "iphone",
        price : 25000
    }
    return (
        <>
            <div className="col-4">
                <div className="card-img">
                    <img src={Obj.img} alt="" />
                </div>
                <div className="content">
                    <h3>{Obj.name}</h3>
                    <p>{Obj.price}</p>
                </div>
            </div>
        </>
    )
};

export default Card


