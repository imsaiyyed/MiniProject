import React,{Component} from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Menu from './components/Menu';
import { Container, Row, Col } from 'reactstrap';

import './App.css';

class App extends Component {

  state={
    category:null
  }

  setCategory=(e)=>{
    let newCategory=e.target.name;
    if(newCategory=="all"){
      this.setState({category:null})
    }else{
      this.setState({category:newCategory})
    }
  }
  render(){
    return (
      <div className="App">
          <Container>
          <Row>
            <Col><Navbar/></Col>
          </Row>
          <Row>
            <Col xs="2"><Sidebar setCategory={this.setCategory}/></Col>
            <Col><Menu category={this.state.category}/></Col>
            {/* <Col><Sidebar/></Col>
            <Col><Sidebar/></Col>
            <Col><Sidebar/></Col>
            <Col><Sidebar/></Col> */}
          </Row>
        
        </Container>
      </div>
    );
  }
  
}

export default App;
