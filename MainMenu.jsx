import React, { Component } from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
import { BrowserRouter, Route, Router, NavLink , Switch, Link } from 'react-router-dom';


const FixedMenuLayout = () => (
  <div>
    <App/>
    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 1' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 2' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 3' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Footer Header' />
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider inverted section />
        <Image
          centered
          size='mini'
          src='/logo.png'
        />
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

const DropdownExampleSearchSelectionTwo = () => (
  <Dropdown placeholder='State' search selection item simple options={
  [
    { key: 'AL', value: 'AL', text: 'Alabama' },
    { key: 'ALA', value: 'ALA', text: 'Potito' }
  ]


  } />
)

class MenuExampleTabularOnLeft extends Component {

  constructor(props){

         super(props);
         this.state = { activeItem: 'bio' }
         this.handleItemClick = (e, { name }) => 
         this.setState({ activeItem: name })

    }
  
  render() {
     const { activeItem } = this.state
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
            <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
            <Menu.Item name='companies' active={activeItem === 'companies'} onClick={this.handleItemClick} />
            <Menu.Item name='links' active={activeItem === 'links'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

class Home extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

class Home2 extends Component {
    render(){
        return (<h1>Holi</h1>);
    }
}

const AppRo = () => (
  <div>
    
    <Menu fixed='top' inverted>
      <Header_/>
    </Menu>

    <Container text style={{ marginTop: '4em', marginLeft: 0 }}>
    <Main />
    </Container>
  </div>
)

const Main = () => (
  <main>
 <Switch>
      <Route exact path='/MenuExampleTabularOnLeft' component={MenuExampleTabularOnLeft}/>
       <Route exact path='/Home' component={Home}/>
 </Switch>
  </main>
)

const Header_ = () => (

      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/equifax.png'
            style={{ marginRight: '1.5em', width: '80px' }}
          />
          Project Name
        </Menu.Item>
        <Menu.Item as={Link} to='/Home'>Home</Menu.Item>
        <Menu.Item as={Link} to= '/MenuExampleTabularOnLeft'>MenuExampleTabularOnLeft</Menu.Item>

        <DropdownExampleSearchSelectionTwo/>

      </Container>

)




class App extends React.Component {
   render() {
      return (
      <BrowserRouter>
        <AppRo/>
      </BrowserRouter>
      );
   }
}


export default FixedMenuLayout
