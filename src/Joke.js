import React, {Component} from 'react';

class Joke extends Component {
    constructor(props){
        super(props);
        this.state = {
            punchLine: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({punchLine: this.props.punchLine})
    }

    render() {

        const giveUP = "invisible";
        const stillTrying = 'btn btn-danger';

        return (
            <div className="card m-3 shadow">
            <div className="card-body">
                <div className="card-title">
                    {this.props.question}
                </div>
                <button className={this.state.punchLine ? giveUP : stillTrying } onClick={this.handleClick}>Give Up!</button>
                <div className="card-text">
                    <p className="font-weight-bold">{this.state.punchLine}</p>
                </div>
            </div>
        </div>
        )
    }
}


export default Joke;