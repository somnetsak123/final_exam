import React, {Component} from "react";
import axios from "axios";
import Modal from 'react-awesome-modal';
import './Showdata.css';
//import '../../server/app';
import {ip,port} from "../setIP/setting";

export default class ShowdataElectronic extends Component{
    constructor() {
        super();
        this.state ={
            list:[],
            idkey:"",
            firstname:"",
            lastname:"",
            email:"",
            Class:"",
            class_EN:"",
            data1:[]
            
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
        //console.log("hello show data");

   

    }


    


    componentDidMount() {
        //console.log("before get data");
        this.getData();
        //console.log("after get data");
    }
    getData = () => {
        console.log("before fetch data");
        fetch('/EN')
            .then(res => res.json())
            .then(list => this.setState({ list }))
        console.log("after fetch data");

        console.log("before fetch data");
        fetch('/class_std')
            .then(res => res.json())
            .then(list => this.setState({ data1:list }))
        console.log("after fetch data");

    }


    onDelete=(user)=>{
        let url = `https://localhost:3000/delete`;
        let data = {
            idkey:user.id_D
        }
        axios.put(url,data)
        setTimeout(()=>{this.componentDidMount()},1)
    }

    openModal() {
        this.setState({
            visible : true
        });

    }
    closeModal() {
        this.setState({
            visible : false
        });
    }
    call=(user)=>{
        this.openModal();
        this.setState({
            idkey:user.id_D,
            firstname:user.firstname_D,
            lastname:user.lastname_D,
            email:user.Email_D,
            Class:user.Class_D,
            class_EN:user.Class_Name
          

        })

    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        
   
        }
      
    

    handleClicked(){
        let url = `https://localhost:3000/data`;
        let data = {
            idkey:this.state.idkey,
            firstname_D:this.state.firstname,
            lastname_D:this.state.lastname,
            Email_D:this.state.email,
            Class_D:this.state.Class,
            Class_Name:this.state.class_EN
           
            
        }
        axios.put(url,data)
        this.setState({
            idkey:"",
            firstname:"",
            lastname:"",
            email:"",
            Class:""
          
        });
	this.closeModal();
        setTimeout(()=>{this.componentDidMount()},1)
    }
    render() {
        let {list} = this.state;

        return (
            <div className="App">
                <h2 className="my-4">Users Information Electronic<br/></h2>
                <hr/>
                <div className="container p-3 my-3 bg-dark text-white">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Class Name</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                                {list.map((user) =>{
                                    return(
                                        <tr>
                                            <td>{user.ID_E}</td>
                                            <td>{user.Class_electronic}</td>
                                            <td>{user.firstname_D}</td>
                                            <td>{user.lastname_D}</td>
                                            <td>{user.Email_D}</td>
                                            {/* <td><button type="button" class="btn btn-warning" onClick={()=>this.call(user)}>Edit</button></td> */}
                                            {/* <td><button type="button" class="btn btn-danger"  onClick={()=>this.onDelete(user)}>Delet</button></td> */}
                                            <div className="box">
                                                <Modal visible={this.state.visible}
                                                       width="1200"
                                                       height="600"
                                                       effect="fadeInUp"
                                                       onClickAway={() => this.closeModal()}
                                                >
                                                    <form className="container" id='form'>
                                                        <div className="form-group">
                                                            <h3><label htmlFor="id">ID: {this.state.idkey}<br/></label></h3>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>firstname:</label>
                                                            <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>lasttname:</label>
                                                            <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                                                        </div>
                                                        {/* <div className="form-group">
                                                            <label>Email:</label>
                                                            <input type="text" className="form-control" id="email" onChange={this.handleChang} value={this.state.email}/>
                                                        </div> */}
                                                        <div className="form-group">
                                                            <label>class:</label>
                                                            {/* <input type="text" className="form-control" id="class_1" onChange={this.handleChang} value={this.state.Class}/> */}
                                                            <select className="form-group" id="Class" value={this.state.Class} onChange={this.handleChang} required>
                                                                    <option value="">Select Class</option>
                                                                      {this.state.data1.map(item => {
                                                                       return <option value={item.ID}>{item.Class_Name}</option>
                                                                                })}
                                                             </select>
                                                        
                                                        </div>
                                                        {/* <div className="form-group">
                                                            <label>Time:</label>
                                                            <input type="text" className="form-control" id="time" onChange={this.handleChang} value={this.state.time}/>
                                                        </div> */}
                                                        <button type="button" className="btn btn-primary" onClick={this.handleClicked}>Submit</button>
                                                    </form>
                                                </Modal>
                                            </div>
                                        </tr>
                                    )})}
                        </tbody>
                    </table>
                </div><br/>
            </div>
        );
    }
}