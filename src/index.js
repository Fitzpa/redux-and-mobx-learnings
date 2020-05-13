import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { connnect, Provider } from 'react-redux'

import './styles.scss';

const initialState = {
    count = 0
}

// Putting a string that will be used throughout your application into a variable like this allows it to error if is misspelled down the road.
// This is a good way to prevent that kind of bug later on.
const INCREMENT = 'INCREMENT'

// ACTION
const incrementValue = () => ({
    type: INCREMENT
})

// REDUCER
const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            count: state.count + 1
        }
    }

    return state
}

const store = createStore(reducer)

class Counter extends Component {
    render() {
        return (
            <main className="Counter">
                <p className="count">0</p>
                <section className="controls">
                    <button>Increment</button>
                    <button>Decrement</button>
                    <button>Reset</button>
                </section>
            </main>
        );
    }
}

render(<Counter />, document.getElementById('root'));