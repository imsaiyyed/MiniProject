import React, { Component } from 'react';
import { Button} from 'reactstrap';

class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Button outline onClick={this.props.setCategory} name="all" color="primary">All Categories</Button><br/>
                <Button outline onClick={this.props.setCategory} name="breads" color="primary">Breads</Button><br/>
                <Button outline onClick={this.props.setCategory} name="fruits" color="primary">Fruits</Button><br/>
                <Button outline onClick={this.props.setCategory} name="dairy" color="primary">Dairy</Button><br/>
                <Button outline onClick={this.props.setCategory} name="seasoning" color="primary">Seasoning and Spices</Button><br/>
                <Button outline onClick={this.props.setCategory} name="vegetables" color="primary">Vegitables</Button><br/>

            </div>
         );
    }
}
 
export default Sidebar;