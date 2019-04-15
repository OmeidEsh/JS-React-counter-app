import React, { Component } from "react";
import Counter from "./counter"; //importing Counter component from counter module.
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const { onReset, counters, onDelete, onIncrement } = this.props; //To make the code cleaner, so we can remove the "this.props." from behind these constatns.
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} //this key atribute is used internally by React. So we won't be able to access it in out counter compinent.
            onDelete={onDelete} //So the <Counter... component rases the Delete event and we're bubble that event to the parent.
            onIncrement={onIncrement}
            //value={counter.value} //Props
            //id={counter.id} //Props
            counter={counter} //Instead of passing individual Props, this will pass all the props. And in the future if we add a new prop, it will automatically pass it in here.
          />
        ))}
      </div>
    );
  }
}

export default Counters;

/////////////////////////////////////////

/*
class Counters extends Component {
    render() {
      return (
        <div>
          <button
            onClick={this.handleReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id} //this key atribute is used internally by React. So we won't be able to access it in out counter compinent.
              onDelete={this.handleDelete} //passing a reference to our child component.
              onIncrement={this.handleIncrement}
              //value={counter.value} //Props
              //id={counter.id} //Props
              counter={counter} //Instead of passing individual Props, this will pass all the props. And in the future if we add a new prop, it will automatically pass it in here.
            />
          ))}
        </div>
      );
    }
  }
  
  export default Counters;
*/
