import React from "react";

export default class Blog extends React.Component {
	 // Constructor is responsible for setting up props and setting initial stte
    constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            cars: []
        };
    }

    componentDidMount(){
        // Static data
        const data = [
            {
                id: 1,
                title: 'Honda Accord Crosstour',
                desc: 'Hello this is a test paragraphs'
               

            },
            {
                id: 2,
                title: 'Mercedes-Benz AMG GT Coupe',
                desc: 'Hello this is a test paragraphs'

            },
            {
                id: 3,
                title: 'BMW X6 SUV',
                desc: 'Hello this is a test paragraphs'
            }
         
        ];
        // Update state
        this.setState({cars: data});
    }


  render() {
    const carNode = this.state.cars.map((car,index) => {
            return (
            	<div className="list-group" key={index}>
				  <a href="#" className="list-group-item active" >
				    <h4 className="list-group-item-heading">{car.title}</h4>
				    <p className="list-group-item-text">{car.desc}</p>
				  </a>
				</div>
            )
        });

        return (
            <div>
                <h1>My Blog Posts</h1>
               
                    {carNode}
               
            </div>
        );
  }
}
