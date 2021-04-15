import React from 'react';

class Paragraph extends React.Component{

    render(){
        return(
            <div>
                {this.props.text}
            </div>
        );
    }
}

export default Paragraph;