import React from 'react'
import './DisplayList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DisplayList(props) {
    const items= props.items
    const ListItems= items.map((item)=>{
        return(
            <div className="displaystyle" key="item.key">
                <p>
                    <input id={item.key} value={item.text} onChange={(e)=>{props.makeUpdate(e.target.value, item.key)}}/>             
                      
                <span > <FontAwesomeIcon className="trashicon" icon="trash" onClick={()=>{props.deleteTodo(item.key)}}  /></span>
                </p>
            </div>
        )
    })

    return (
        <div>
            {ListItems}
        </div>
    )
}
