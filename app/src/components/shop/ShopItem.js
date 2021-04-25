export default function ShopItem({item}) {
    return (
        <div className="item">
            <img src={item.img} alt="photo"/>
            <p className="item-title">{item.name}</p>
            <p className="item-color">{item.color}</p>           
            <p className="item-price">${item.price}</p>
            <button className="item-btn">ADD TO CARD</button>
        </div>  
    ) 
}