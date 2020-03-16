import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Kolom from '../components/kolom';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

const kolompseudoData = [
    {
        naam: "TODO",
        type: "TODO",
        
    },
    {
        naam: "DOING",
        type: "DOING",
        
    },
    {
        naam: "DONE",
        type: "DONE",
        
    }
]



class BoardView extends Component{

    onDragEnd = () =>{

    }
    
    render(){
        let colCount = 3;
        let widthPerCol = 12/colCount;

        return(
            <DragDropContext>
                <div className="container">
                    <div className="row board">
                        <Droppable droppableId="1">
                            { (provided, snapshots)=>{
                                    return (<React.Fragment ref={provided.innerRef} 
                                        {...provided.droppableProps}>
                                    {kolompseudoData.map((col, index)=>{
                                        return (
                                            <Kolom type={col.type} name={col.naam} col={widthPerCol} key={index}/>
                                        );
                                    })
                                    }
                                    </React.Fragment>);
                                }
                            }
                        </Droppable>
                    </div>
                </div>
            </DragDropContext>
        );
    }
}

export default BoardView;