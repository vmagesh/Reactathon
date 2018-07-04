import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,CardImg,CardSubtitle,CardBody,Badge } from 'reactstrap';
import classnames from 'classnames';
import {Glyphicon} from 'react-bootstrap';


export default class Hackothonlist extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div style={{padding:20,border : 1,borderTopStyle:'solid',borderTopColor:'red'}}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Events
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Leadership Board
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row style={{height:20}}></Row>
            <Row>
          <Col>
          <Card body style={{ border: "1px solid grey", backgroundColor:'#e9ecef' }}>
            <CardImg top height="200" width="100" src={require('../images/hack12.png')} alt='Sample' />
            <CardBody>
              <CardTitle><h1>Reactathon</h1></CardTitle>
              <div style={{height:20,clear:'both'}}></div>
              <CardSubtitle><p class="h5">Location : Olympia Tech Park, Chennai</p></CardSubtitle>
              <CardSubtitle><p class="h5">Date : 27th July 2018!</p></CardSubtitle>
              <CardSubtitle><p class="h5">Conducted By : NT And T Chennai</p></CardSubtitle>
              <CardText>Range of skillsets that can ideate around social/technology solutions for consumer brands (brand tbc) i.e. apps, sites, smart speaker skills, games connected objects and whatever takes your fancy!</CardText>
              <div style={{height:20,clear:'both'}}></div>
              <Button color="success">Challenge Now!</Button>
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card body style={{ border: "1px solid grey", backgroundColor:'#e9ecef' }}>
            <CardImg top height="200" width="100" src={require('../images/c4.png')} alt='Sample' />
            <CardBody>
              <CardTitle><h1>Grabathon</h1></CardTitle>
              <div style={{height:20,clear:'both'}}></div>
              <CardSubtitle><p class="h5">Location : Olympia Tech Park, Chennai</p></CardSubtitle>
              <CardSubtitle><p class="h5">Date : 27th July 2018!</p></CardSubtitle>
              <CardSubtitle><p class="h5">Conducted By : NT And T Chennai</p></CardSubtitle>
              <CardText>Range of skillsets that can ideate around social/technology solutions for consumer brands (brand tbc) i.e. apps, sites, smart speaker skills, games connected objects and whatever takes your fancy!</CardText>
              <div style={{height:20,clear:'both'}}></div>
              <Button color="success">Challenge Now!</Button>
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card body style={{ border: "1px solid grey", backgroundColor:'#e9ecef' }}>
            <CardImg top height="200" width="100" src={require('../images/c5.png')} alt='Sample' />
            <CardBody>
              <CardTitle><h1>Securathon</h1></CardTitle>
              <div style={{height:20,clear:'both'}}></div>
              <CardSubtitle><p class="h5">Location : Olympia Tech Park, Chennai</p></CardSubtitle>
              <CardSubtitle><p class="h5">Date : 27th July 2018!</p></CardSubtitle>
              <CardSubtitle><p class="h5">Conducted By : NT And T Chennai</p></CardSubtitle>
              <CardText>Range of skillsets that can ideate around social/technology solutions for consumer brands (brand tbc) i.e. apps, sites, smart speaker skills, games connected objects and whatever takes your fancy!</CardText>
              <div style={{height:20,clear:'both'}}></div>
              <Button color="success">Challenge Now!</Button>
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card body style={{ border: "1px solid grey", backgroundColor:'#e9ecef' }}>
            <CardImg top height="200" width="100" src={require('../images/hack13.png')} alt='Sample' />
            <CardBody>
              <CardTitle><h1>Verizothon</h1></CardTitle>
              <div style={{height:20,clear:'both'}}></div>
              <CardSubtitle><p class="h5">Location : Olympia Tech Park, Chennai</p></CardSubtitle>
              <CardSubtitle><p class="h5">Date : 27th July 2018!</p></CardSubtitle>
              <CardSubtitle><p class="h5">Conducted By : NT And T Chennai</p></CardSubtitle>
              <CardText>Range of skillsets that can ideate around social/technology solutions for consumer brands (brand tbc) i.e. apps, sites, smart speaker skills, games connected objects and whatever takes your fancy!</CardText>
              <div style={{height:20,clear:'both'}}></div>
              <Button color="success">Challenge Now!</Button>
            </CardBody>
          </Card>
          </Col>
            </Row>
            <Row style={{height:20}}></Row>
            <Row>
          <Col>
          <Card body style={{ border: "1px solid grey", backgroundColor:'#e9ecef' }}>
            <CardImg top height="200" width="100" src={require('../images/c6.png')} alt='Sample' />
            <CardBody>
              <CardTitle><h1>Healathon</h1></CardTitle>
              <div style={{height:20,clear:'both'}}></div>
              <CardSubtitle><p class="h5">Location : Olympia Tech Park, Chennai</p></CardSubtitle>
              <CardSubtitle><p class="h5">Date : 27th July 2018!</p></CardSubtitle>
              <CardSubtitle><p class="h5">Conducted By : NT And T Chennai</p></CardSubtitle>
              <CardText>Range of skillsets that can ideate around social/technology solutions for consumer brands (brand tbc) i.e. apps, sites, smart speaker skills, games connected objects and whatever takes your fancy!</CardText>
              <div style={{height:20,clear:'both'}}></div>
              <Button color="success">Challenge Now!</Button>
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card body style={{ border: "1px solid grey", backgroundColor:'#e9ecef' }}>
            <CardImg top height="200" width="100" src={require('../images/hack13.png')} alt='Sample' />
            <CardBody>
              <CardTitle><h1>Verizothon</h1></CardTitle>
              <div style={{height:20,clear:'both'}}></div>
              <CardSubtitle><p class="h5">Location : Olympia Tech Park, Chennai</p></CardSubtitle>
              <CardSubtitle><p class="h5">Date : 27th July 2018!</p></CardSubtitle>
              <CardSubtitle><p class="h5">Conducted By : NT And T Chennai</p></CardSubtitle>
              <CardText>Range of skillsets that can ideate around social/technology solutions for consumer brands (brand tbc) i.e. apps, sites, smart speaker skills, games connected objects and whatever takes your fancy!</CardText>
              <div style={{height:20,clear:'both'}}></div>
              <Button color="success">Challenge Now!</Button>
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card body style={{ border: "1px solid grey", backgroundColor:'#e9ecef' }}>
            <CardImg top height="200" width="100" src={require('../images/c8.png')} alt='Sample' />
            <CardBody>
              <CardTitle><h1>Hackthon</h1></CardTitle>
              <div style={{height:20,clear:'both'}}></div>
              <CardSubtitle><p class="h5">Location : Olympia Tech Park, Chennai</p></CardSubtitle>
              <CardSubtitle><p class="h5">Date : 27th July 2018!</p></CardSubtitle>
              <CardSubtitle><p class="h5">Conducted By : NT And T Chennai</p></CardSubtitle>
              <CardText>Range of skillsets that can ideate around social/technology solutions for consumer brands (brand tbc) i.e. apps, sites, smart speaker skills, games connected objects and whatever takes your fancy!</CardText>
              <div style={{height:20,clear:'both'}}></div>
              <Button color="success">Challenge Now!</Button>
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card body style={{ border: "1px solid grey", backgroundColor:'#e9ecef' }}>
            <CardImg top height="200" width="100" src={require('../images/c5.png')} alt='Sample' />
            <CardBody>
              <CardTitle><h1>Securathon</h1></CardTitle>
              <div style={{height:20,clear:'both'}}></div>
              <CardSubtitle><p class="h5">Location : Olympia Tech Park, Chennai</p></CardSubtitle>
              <CardSubtitle><p class="h5">Date : 27th July 2018!</p></CardSubtitle>
              <CardSubtitle><p class="h5">Conducted By : NT And T Chennai</p></CardSubtitle>
              <CardText>Range of skillsets that can ideate around social/technology solutions for consumer brands (brand tbc) i.e. apps, sites, smart speaker skills, games connected objects and whatever takes your fancy!</CardText>
              <div style={{height:20,clear:'both'}}></div>
              <Button color="success">Challenge Now!</Button>
            </CardBody>
          </Card>
          </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
