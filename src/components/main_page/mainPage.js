import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from './mainPageActions';

export class MainPage extends Component {
    render() {
        return <div>
            <p>sausage</p>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onHandleLoad: () => {
            dispatch(Actions.load());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);