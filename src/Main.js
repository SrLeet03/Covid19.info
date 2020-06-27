import React, { Component } from 'react'
import Header from './Header';
import styles from './App.modules.css'  ;
import Cards from './Cards' ;
import Charts from './Chart' ;
import CountryPicker from './CountryPicker';
import {fetchData} from './index';//we dont have to specify index file name if your file name is index 
class  Main extends React.Component {  
    state = {         
    data: {},  
    country: '',  
    }  
    async componentDidMount(){  
        const data = await fetchData();  
        //console.log(fetchedData);  
        this.setState({data});  
    }  
  
     handleCountryChange = async (country) => {          
        const data = await fetchData(country);  
        this.setState({data: data, country: country});  
     }  
  
    render(){  
        const {data, country } = this.state;  
        return(  
        <div  className={styles.container} >  
            <Cards data={data}/>  
            <CountryPicker handleCountryChange={this.handleCountryChange}/>  
            <Charts data={data} country={country}/>  
        </div>  
    )  
}  
}  
  
export default Main;
