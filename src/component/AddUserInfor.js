import React from 'react';

class AddUserInfor extends React.Component {
    state = {
        name:"",
        age:0
    }
    handleClick () {
        if (this.state.name == "tri") {
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
    handleOnchangeName(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleOnchangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    handleOnsubmit(event) {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1+"random",
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleOnsubmit(event)}>
                    <label>Nhập tên</label><input onChange={(event) => this.handleOnchangeName(event)} type="text"/>
                    <label>Nhập tuổi</label><input onChange={(event) => this.handleOnchangeAge(event)} type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default AddUserInfor;