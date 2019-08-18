import React, {Component} from 'react';

import Item from '../components/Item';
import Header from '../components/Header';

class Page extends Component {
    render(){
        return (
            <div className="page">
                <Header />
                <Item />
            </div>
        )
    }
}

export default Page;

