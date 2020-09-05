import React from 'react';


class PopupEdit extends React.Component{
   

    render(){
        return(
            <div className='popup_edit'>
                <div className='popup_header'>
                    <input placeholder='Title' value={this.props.name} onChange={(e)=>{this.props.onEditTitle(e.target.value,this.props.id)}}/>
                    <button onClick={this.props.toggle}>OK</button>
                </div>
                <div className='description'>
                    <textarea placeholder='Desciption' value={this.props.desc} onChange={(e)=>{this.props.onEditDesc(e.target.value,this.props.id)}}/>
                </div>
            </div>
        );
    }
}
export default PopupEdit;