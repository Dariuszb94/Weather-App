import React, {Component} from 'react';
import Form from './Form';
import Header from './Header';
import Result from './Result';
import './App.css';

//Klucz do API
const APIKey='6dd59afe128b829271e3c378ec2ba2cc';

class App extends Component{
  state={
    value: '',
    date:'',
    city:'',
    sunrise:'',
    sunset:'',
    temp:'',
    pressure:'',
    wind:'',
    err:false,
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e => {
    e.preventDefault()

 const API ='https://api.openweathermap.org/data/2.5/weather?q=' + this.state.value + '&appid=' + APIKey +'&units=metric';
  
fetch(API)
.then(response => {
  if(response.ok){
    return response
  }
  throw Error("Nie udało się")
})
.then(response => response.json())
.then(data =>{
  const time=new Date().toLocaleString()
  this.setState(state => ({
    err:false,
    date:time,
    city:state.value,
    sunrise:data.sys.sunrise,
    sunset:data.sys.sunset,
    temp:data.main.temp,
    pressure:data.main.pressure,
    wind:data.wind.speed,
 
  }))
})
.catch(err=>{
  
  console.log(err);
  this.setState(prevState =>({
    
    err:true,
    city:prevState.value
  }))
})
}
  render(){
  return (
    <div className="App">
      <Header/>
      <div className="main">
  <Form 
  value={this.state.value}
   change={this.handleInputChange} 
   submit={this.handleCitySubmit} 
   />
  <Result weather={this.state}/>
    </div>
    </div>
  );
  }
}

export default App;
