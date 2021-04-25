import React from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './view/CardsView';
import ListView from './view/ListView';

export default class StoreClass extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {list: true}
    }

    onClick() {
        this.setState(prevState => ({ ...prevState, list: !prevState.list}))
    }

    render() {
    const icon = this.state.list ? "view_list" : "view_module";
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
    return (
        <div>
            <IconSwitch icon={icon} onSwitch={this.onClick}/>
            {/* <CardsView cards={products} />    */}
            <ListView items={products} />                  
        </div>      
        )
    }
}