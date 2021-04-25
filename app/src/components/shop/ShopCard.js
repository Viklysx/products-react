export default function ShopCard({card}) {
    return (
        <div className="card">
            <div>
                <p className="card-title">{card.name}</p>
                <p className="card-color">{card.color}</p>
                <img src={card.img} alt="photo"/>
            </div>
            <div className="card-block-bottom">
                <div>
                    <p className="card-price">${card.price}</p>
                </div>
                <div>
                    <button className="card-btn">ADD TO CARD</button>
                </div>
            </div>
        </div>  
    )
}