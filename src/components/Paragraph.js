import React from 'react';

class Paragraph extends React.Component{
    constructor(props) {
        super(props);
        this.state = { clicked: false }; 
    }

    render(){
        return(
            <div className="paragraph">
                <div className="paragraph-text">
                    {this.props.text}
                </div>
                <div onClick={() => {
                    navigator.clipboard.writeText(this.props.text);
                    this.setState({ clicked: true });
                }} className={ this.state.clicked ? 'paragraph-copy grey' : 'paragraph-copy'}>
                    copiar
                </div>
            </div>
        );
    }
}

export default Paragraph;