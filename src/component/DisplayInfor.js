import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';
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
                <img src={logo}/>
                <p onClick={()=> {this.hideContent()}}><u>{this.state.show ? "hide" : "show"  } information</u></p>
                {this.state.show && <>
                    { list.map((user)=> {
                        let lop="green";
                        if (+user.age>17) lop="red"
                        return (
                            <div className={lop} key={user.id}>
                                <p>Tôi tên là {user.name} và tôi {user.age} tuổi</p>
                                <hr/>
                                {/* <p style={{color:"green", fontSize: "80px", backgroundColor:"black"}}>Thử nghiệm css</p> */}
                            </div>
                            
                        );
                    })
                    }
                    
                </>}
            </div>
        );
    }
}

export default DisplayInfor;

