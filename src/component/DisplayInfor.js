import React from 'react';

class DisplayInfor extends React.Component {
    state = {
        show:true
    }
    hideContent =() => {
        // alert("runned")
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        const list=this.props.user
        // console.table(this.props.user)
        return (
            <div>
                <p onClick={()=> {this.hideContent()}}><u>{this.state.show ? "hide" : "show"  } information</u></p>
                {this.state.show && <div>
                    { list.map((user)=> {
                        let lop="green";
                        if (+user.age>17) lop="red"
                        return (
                            <div className={lop} key={user.id}>
                                <p>Tôi tên là {user.name} và tôi {user.age} tuổi</p>
                                <hr/>
                            </div>
                            
                        );
                    })
                    }
                    
                </div>}
            </div>
        );
    }
}

export default DisplayInfor;

