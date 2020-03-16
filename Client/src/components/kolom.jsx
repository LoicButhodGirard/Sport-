import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Draggable} from 'react-beautiful-dnd';



class Kolom extends Component{
    render(){
        const COLWIDTH = "col-lg-" + this.props.col;
        const COLTYPE = this.props.type;
        return(
                <Draggable draggableId="1">
                    {(provided, snapshots) =>{
                        return(
                            <div className={"boardKolom " + COLWIDTH + " " + COLTYPE}   ref={provided.innerRef}  {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                                <h1 className="colName">{this.props.name}</h1>

                            </div>
                            )
                        }
                    }
                </Draggable>
          

        )
    }
}

export default Kolom;