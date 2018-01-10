import React from 'react';
import data2 from '../../../sampleData2.js';
import HouseListing from './HouseListing.jsx';
import Search from './Search.jsx';
import SearchView from './SearchView.jsx';

class HomeView extends React.Component {
  	
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
        <div> 
        <div>
              <div className="row">
                <div className="col-lg-12 jumbotron cleanBorder center-text"> 
                  <img src="https://files.slack.com/files-pri/T7ZKUC7EW-F8R07J085/airdnb.png" width={360} height={90} mode='fit' id="shiftLeft"/>
                  <br />
                  <br />
                  <h2 className="display-4"> Book unique homes and</h2> 
                  <h2 className="display-4"> experiences all over the world. </h2>
                  <br />
                  <br />
                  <Search clickFn = {this.props.searchClickFn}/>
                </div>
              </div>

            </div>
        <div className = 'container-fluid'> 
          <div className = 'row'>
            <div className="col-md-12 cleanBorder"> 
            <div className = 'row'>
  	          {data2.map((house) => <HouseListing house = {house}/>)}
              </div>
            </div> 
          
          </div>
  	    </div> 
      </div>
  	)


  }


}




export default HomeView;