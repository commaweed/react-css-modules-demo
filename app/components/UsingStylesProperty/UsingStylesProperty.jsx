import React from 'react';

const UsingStylesProperty = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        });
    }

    render() {
        return <div class={this.props.styles.table}>
            <div class={this.props.styles.row}>
                <div class={this.props.styles.cell}>A0 {this.state.count}</div>
                <div class={this.props.styles.cell}>B0</div>
            </div>
        </div>;
    }
}

export {UsingStylesProperty};
