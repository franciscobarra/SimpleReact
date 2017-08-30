import React from 'react';
import { Dropdown } from 'semantic-ui-react';


class App extends React.Component {
   render() {
      return (
         <div >
            Hello World!!!
         </div>,
         <div>
         <DropdownQuarterBySprint/>
      	</div>
      );
 }
}


var quarterOptions = [ {key: '1', value: 'q1', label: 'Q1', text: 'Quarter 1'},
           			   {key: '2', value: 'q2', label: 'Q2', text: 'Quarter 2'},
            		   {key: '3', value: 'q3', label: 'Q3', text: 'Quarter 3'},
            	       {key: '4', value: 'q4', label: 'Q4', text: 'Quarter 4'}]

 
const DropdownQuarterBySprint = () => (
  <Dropdown placeholder='Quarter Options' search selection options={quarterOptions} />
)

export default App;