import React from "react";
import Request from "superagent";

export default class Home extends React.Component {
	constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            profile: {}
        };
    }
    componentDidMount(){

        var url = "https://api.github.com/users/zahiruldu";
        Request.get(url).then((response)=>{
        	this.setState({
        		profile: response.body
        	})
        });

      
    }
   

  render() {
  		const me = this.state.profile;

		const carNode =  
	    	<div>
				<div className="card" key={me}>
						<img className="card-img-top" src={me.avatar_url}  width="100"/>
				  <div className="card-block">
				    <h4 className="card-title">{me.name}</h4>
				    <p className="card-text">{me.bio}</p>
				  </div>
				  <ul className="list-group list-group-flush">
				    <li className="list-group-item">{me.location}</li>
				    <li className="list-group-item">{me.company}</li>
				    <li className="list-group-item">{me.blog}</li>
				    <li className="list-group-item">{me.login}</li>
				    <li className="list-group-item">{me.email}</li>
				  </ul>
				</div>
			</div>
        



    return (
      <div>
      
      {carNode}
     

      </div>
    );
  }
}
