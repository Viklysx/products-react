import React from 'react';
import IconSwitch from './IconSwitch';

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
    return (
        <IconSwitch icon={icon} onSwitch={this.onClick}/>
        )
    }
}