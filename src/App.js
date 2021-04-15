import React from 'react';
import Input from './components/Input';
import Paragraph from './components/Paragraph';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { input: '' };
    }

    handleChange(e) {
        this.setState({ input: e });
    }

    splitInput(input) {
        input = String(input);
        const splitted = [];
        if (input.length < 256) return [input];
        let pos = 0;
        console.log(input);
        while (pos < input.length) {
            let current_line = input.substring(pos, pos + 256);
            const separators = ['.', ',', ':', ';', '!', '?'];
            let cut = Math.max(...separators.map((v) => current_line.lastIndexOf(v)));
            cut = cut === -1 ? 256 : cut;
            current_line = input.substring(pos, pos + cut + 1); // +1 to include the actual separator
            splitted.push(current_line.trim().replace(/(\t\n|\n|\t)/gm, ' '));
            pos += current_line.length;
        }
        return splitted;
    }

    createParagraphs() {
        return this.splitInput(this.state.input).map((value, index) => {
            return <Paragraph text={value} key={index} />
        });
    }

    render() {
        const input = this.state.input;
        return (
            <div>
                <Input value={input} handler={this.handleChange} />
                {this.createParagraphs()}
            </div>
        )
    }
}

export default App;
