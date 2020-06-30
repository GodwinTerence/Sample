import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      //isLoading: true,
     // datasource: {}

    };
  }

 /* async componentDidMount(){
    try {
			const response = await fetch('');
			let responseJson = await response.json();
			this.setState(
				{
					isLoading: false,
					dataSource: responseJson
				},
				function() {}
			);
		} catch (error) {
			console.error(error);
		}
  }*/

  render(){
	  return <h1>Happy Coding</h1>
    /*let { dataSource } = this.state;
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					{dataSource.Items.map(item => (
						<div key={item.CardId}>
							<h1>{item.CardColor}</h1>
							<li>{item.CardCost}</li>
							<li>{item.CardText}</li>
						</div>
					))}
				</div>
			);
		}*/
	}

  

}



export default App;
