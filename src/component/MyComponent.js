import React from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';

class MyComponent extends React.Component {
    state = {
        user: [{id:1, name:"A", age:17},
            {id:2,name:"B",age:25},
            {id:3, name:"C",age:52}
        ]
    }

    componentDidMount() {
        console.log("DidMount đã được gọi")
        setTimeout(() => {document.title ="Tên mới"},3000)
    }

    handleAddNewUser = (infor) =>{
        // console.log(infor)
        let newUser=this.state.user
        newUser.unshift(infor)
        this.setState({
            user: newUser
        })
        // this.state.user.unshift(infor)
    }

    render() {
        console.log("render đã được gọi")
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
                <DisplayInfor  user={this.state.user} />
            </div>
            
        );
    }
}
export default MyComponent;