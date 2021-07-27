import React, { Component } from 'react'
import "./App.css"
import { library} from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import DisplayList from './DisplayList'

library.add(faTrash)
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items:[],
      currentItem:{
        text:"",
        key:"",
      },
     
       
    }
  }
  enterInput=(e)=>{
    this.setState({ 
    currentItem:{
      text:e.target.value,
      key : Date.now(),
    }})
  }
  addButton=(e)=>{
    e.preventDefault();
    const newItem =this.state.currentItem;
    console.log(newItem);
    if (newItem.text !=="")
    {
      const newItems=[newItem,...this.state.items]
      console.log(newItems)
      this.setState(
        {
          items:newItems,
          currentItem:{
            text:"",
            key:"",
          },
        }
      )
      
    }

  }
  deleteTodo=(key)=>{
    const deletePlan = this.state.items.filter((item)=> item.key !== key);
    this.setState({
      items: deletePlan ,
    })
  };

  makeUpdate = (text , key)=>{

        const items = this.state.items;

           items.map((item)=>{

          if (item.key=== key){

               item.text = text;
          }
          return({});
        });
        
          this.setState({
            items: items,
          })

         
  };  

  render() {

    return (
      <div className="App">
        <header>
      <form id='To-do-form' onSubmit={this.addButton} >
        <input placeholder="Todays todo" type="text" value={this.state.currentItem.text} onChange={this.enterInput}/>
          <button className="Add-button" type="submit" > Add </button>
      
      </form>
      <DisplayList items={this.state.items} deleteTodo={this.deleteTodo} makeUpdate={this.makeUpdate} />

      </header>
    </div>
    )
  }
}

