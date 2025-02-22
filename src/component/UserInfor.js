import React from 'react';

class UserInfor extends React.Component {
    state = {
        name:"tri",
        age:20
    }
    handleClick () {
        if (this.state.name=="tri") {
            this.setState ({
                name:"quan"
            })
        }
        else {
            this.setState ({
                name:"tri"
            })
        }
    }
    handleOnchangeInput(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleOnsubmit(event) {
        event.preventDefault();
        alert("hello")
    }
    render() {
        return (
            <div>
                xin chào tôi tên là {this.state.name}
                <button onClick={() => {this.handleClick()}}>Nút bấm</button>
                    <br/>
                    <form >
                        <input value={this.state.name} onChange={(event)=> this.handleOnchangeInput(event)} type="text"/>
                        <button onClick={(event)=> {this.handleOnsubmit(event)}} >Submit</button>
                    </form>
                    <br/>
            </div>
        );
    }
}
export default UserInfor;