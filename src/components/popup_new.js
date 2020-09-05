import React from 'react';


class PopupNew extends React.Component{
   

    render(){
        return(
            <div className='popup_new'>
                <div className='popup_header'>
                    <input placeholder='Title'  onChange={(e)=>{this.props.onEditTitle(e.target.value)}}/>
                    <button onClick={this.props.toggle}>Add</button>
                </div>
                <div className='description'>
                    <textarea placeholder='Desciption'  onChange={(e)=>{this.props.onEditDesc(e.target.value)}}/>
                </div>
            </div>
        );
    }
}
export default PopupNew;