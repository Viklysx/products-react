import ShopItem from '../shop/ShopItem';

export default function ListView({items}) {
    return (
        <div className="wrapper-item">
        {
            items.map((elem) => <ShopItem item={elem} />)
        }
        </div>          
    )
}