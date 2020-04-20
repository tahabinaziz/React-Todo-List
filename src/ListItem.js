import React from 'react';
import "./ListItem.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ListItems = (props)=>{
    const items = props.items;
    console.log(items);
    const listItem = items.map(item => 
        {

        return <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value= {item.text}
                    onChange={
                        (e)=> {
                            props.setUpdate(e.target.value, item.key)
                            }
                    }/>
                    
                <span>
                <FontAwesomeIcon className="faicon"
                 icon='trash'
                 onClick={()=>props.deleteItem(item.key)} />
                </span>
                </p>
                
            </div>
        
    })
    return(
        <div>
            {listItem}
        </div>
    )
}

export default ListItems;