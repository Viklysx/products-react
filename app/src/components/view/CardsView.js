import ShopCard from '../shop/ShopCard';

export default function CardsView({cards}) {
    return (
        <div className="wrapper-card">
        {
            cards.map((item) =>                
                <ShopCard card={item} />               
            )
        }
        </div>       
    )
}