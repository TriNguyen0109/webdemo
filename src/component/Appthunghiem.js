import React from 'react'

class Appthunghiem extends React.Component {
    state = {
        //Tại đây có thể khai báo các biến và state giống như một object
    }

    ham = ( /* Ở đây có thể tham trị khi gọi hàm*/)=> {
        //Trong hàm có thể tạo biến, tính toán, lưu ý khi lấy biến từ state phải ghi this.<tên biến>
        // nếu lấy một biến từ file cha, ta có thể lấy thông qua prop bằng cú pháp this.prop.<tên biến> 

        /*Nếu muốn thay đổi giá trị trong object, ta cần gọi  như sau
        this.setState ({
            
        })
        */
    }
    constructor() {
        //Hàm có sẵn của reactjs sẽ được khởi chạy ngay lập tức khi file được gọi tới
    }

    componentDidMount() {
        //Hàm có sẵn của reactjs chạy sau khi hàm render chạy xong
    }

    render() {
        return (
            <div>Hello</div>
            // có thể gọi một hàm thông qua prop nếu khi gọi đến bằng this.prop.<tên hàm>();
            // có thế gọi đến các file con thông qua thẻ có tên là tên class của file con
            // ví dụ: <
            // <{tên class con} {hàm hoặc biến đưa vào để hàm con truy cập thông qua props} >
        )
    }
}
export default Appthunghiem