import {Component} from 'react';
import {Link} from 'react-router-dom';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        this.addCounter = this.addCounter.bind(this);
    }

    addCounter () {
        console.log('hello');
        this.setState((state) => {
            return {counter: state.counter + 1}
        });
    }
    render() {
        return <>
        <h1>Welcome to Resume Builder</h1>
        <Link to="/cv/intro">Start Building</Link>
        </>
    }
}

export default HomeScreen