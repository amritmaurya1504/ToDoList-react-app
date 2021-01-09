import React, { useState } from 'react';
import ToDo from './ToDo';


const App = () => {

    const [inputList, setInputList] = useState();
    const [items, setItems] = useState([]);

    const itemEvents = (event) => {
        setInputList(event.target.value);
    }
    const showData = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });                 //old item usestate wala object ko sara data ko acces kar rha hai

        setInputList("");
    }
    const deleteData = (id) =>{
        console.log("Deleted");
        setItems((oldItems) =>{
        return oldItems.filter((arrElem , index)=>{
        return index !== id;
        });
        });
    }

    return (
        <>
            <div className="main_div">
                <div className="inner_div">
                    <br />
                    <div className="circle">
                        <h1>ToDo List</h1>
                    </div>
                    <br />
                    <input type="text" placeholder="Add a items" onChange={itemEvents} value={inputList} />
                    <button onClick={showData}> + </button>

                    <ol>
                        {
                            items.map((itemVal, index) => {
                                return <ToDo
                                    key={index}
                                    id={index}
                                    text={itemVal}
                                    onSelect={deleteData} />;
                            }
                            )}

                    </ol>

                </div>
            </div>
        </>
    )
}

export default App;