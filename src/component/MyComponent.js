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
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
                <DisplayInfor  user={this.state.user} />
            </div>
            
        );
    }
}
export default MyComponent;