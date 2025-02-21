import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div>Đây là một component
                {Math.random()}
            </div>
        );
    }
}
export default MyComponent;