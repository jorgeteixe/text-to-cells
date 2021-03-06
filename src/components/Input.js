import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handler(e.target.value);
    }

    render() {
        const value = this.props.value;
        return (
            <div className="input">
                <textarea rows="6" className="input-textarea" value={value} onChange={this.handleChange} />
            </div>
        )
    }
}

export default Input;