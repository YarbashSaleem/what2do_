import React from 'react';  
import Task from '../components/task';
import PopupNew from '../components/popup_new'
import { Link } from 'react-router-dom';
import PopupEdit from '../components/popup_edit';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            task:'',
            desc:'',
            edit:'',
            tasks:[],
            count:0,
            query:'',
            pop_new:false,
            pop_edit:false,
            viewD:0,
        }
    }
    addTask(){
        const tasks=this.state.tasks
        const task=this.state.task
        if(task!==''){
        tasks.push(
            {
                name:this.state.task,
                desc:this.state.desc,
                id:this.state.count,
                strike:false
            }
        )
        this.setState({
            task:'',
            desc:'',
            count:this.state.count+1,
        })
        }
        this.toggle_popnew()
    }
    newTaskTitle(event){
        this.setState({
            task:event,
        })
    }
    newTaskDesc(event){
        this.setState({
            desc:event
        })
    }
    delTask(i){
        const newtasks=this.state.tasks.filter((item)=>item.id!==i.id);
        this.setState({
            tasks:newtasks
        })
    }
    editTaskTitle(e,id){
        const newTasks=this.state.tasks
        newTasks.map(i=>{
            if(id===i.id){
            i.name=e
            }
        })
        this.setState({tasks:newTasks})
        console.log(newTasks)
    }
    editTaskDesc(e,id){
        const newTasks=this.state.tasks
        newTasks.map(i=>{
            if(id===i.id){
            i.desc=e
            }
        })
        this.setState({tasks:newTasks})
        console.log(newTasks)
    }
    
    search(event){
        this.setState({
            query:event.target.value
        })
        }

    toggle_popnew(){
        this.setState({
            pop_new:!this.state.pop_new,
        })
    }
    toggle_popedit(){
        this.setState({
            pop_edit:!this.state.pop_edit
        })
    }
    onView(e){
        this.setState({
            viewD:e.id
        })
        this.toggle_popedit()
    }
    onDone(e){
        const newTasks=this.state.tasks
        newTasks.map(i=>{
            if(e.id===i.id){
            i.strike=!i.strike
            }
        })
        this.setState({tasks:newTasks})
        console.log(newTasks)
    }

    render(){
        let filteredtasks=this.state.tasks.filter((task)=>{
            return task.name.includes(this.state.query)
        })
        let view=this.state.tasks.filter((task)=>{
            return task.id===this.state.viewD
        })
        return(
            <div className='home_container'>
                <div className='home'>
                    <div className='tasks'>
                        <div className='header'>
                            <h1>
                                What2do
                            </h1>
                            <Link className='link' to='/'>
                                Logout
                            </Link>
                        </div>
                        <div className='menu'>
                            <div className='newTask'>
                                <p>Add a task</p>
                                <button id='addTask' onClick={this.toggle_popnew.bind(this)}>+</button>
                            </div>
                            <div className='search'>
                                    <input type='text' placeholder='Search for a task' onChange={this.search.bind(this)}></input>
                            </div>
                        </div>
                    </div>
                    {this.state.pop_new?<PopupNew toggle={this.addTask.bind(this)} 
                                            onEditTitle={this.newTaskTitle.bind(this)} 
                                            onEditDesc={this.newTaskDesc.bind(this)}/>:null}
                    {this.state.pop_edit?
                                            view.map((task,i)=>{
                                                return(<PopupEdit toggle={this.toggle_popedit.bind(this)} key={i} 
                                                                name={task.name}
                                                                desc={task.desc}
                                                                id={task.id}
                                                                onEditTitle={this.editTaskTitle.bind(this)}
                                                                onEditDesc={this.editTaskDesc.bind(this)}/>)
                                            })
                                            :null}
                    <div className='tasksList'>
                                <ul>
                                    {   
                                        filteredtasks.map((task,i)=>{
                                            return(<Task newTaskTitle={task.name} key={i} 
                                                        newTaskDesc={task.desc}
                                                        onDelete={this.delTask.bind(this,task)}
                                                        id={task.id}
                                                        onView={this.onView.bind(this,task)}
                                                        onDone={this.onDone.bind(this,task)}
                                                        strike={task.strike}/>)
                                                })
                                    }
                                </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;