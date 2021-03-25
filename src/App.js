import logo from './logo.svg';
import './App.css';
import React from 'react';
import styles from './App.module.css';
import {Cards,Charts,Countrypicker} from './components';
import { fetchData} from './api';
import coronaImage from './images/image.png';



class App extends React.Component{
 state = {
   data: {},
   country:'',
 }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
        
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country:country}); 
   
  }
  render(){
     const {data,country} = this.state;
    return(
    <div className={styles.container}>
      <img className={styles.images} src={coronaImage} alt="COVID-19"/>
      <Cards data={data}/>
      <Countrypicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
    </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
