import React from 'react';

let UsingStyleName = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 10);
    }

    render () {
        return <div styleName='table'>
            <div styleName='row'>
                <div styleName='cell'>A0 {this.state.count}</div>
                <div styleName='cell'>B0</div>
            </div>
        </div>;
    }
}

export { UsingStyleName };