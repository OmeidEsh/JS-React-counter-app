//typed "imrc"
import React, { Component } from "react";

//Typed "cc"
//Instead of having <div> we replaced it with <React.Fragment> so it won't show two <div> when inspecting the borwser.
//Child class: Counter.
//Constructor of parant class: Component.
class Counter extends Component {
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  //   //Access to current object in the event handler. (IMPORTANT =>)
  //   handleIncrement = product => {
  //     //console.log(product);
  //     this.setState({ value: this.state.value + 1 }); //Instead of "this.state.count++;" which it won't work.
  //   };

  render() {
    console.log("Counter - Render");

    return (
      //<React.Fragment>
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          INCREMENT
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          DELETE
        </button>
      </div>
      //</React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//////////////////////////////////////////////////
/*
//typed "imrc"
import React, { Component } from "react";

//Typed "cc"
//Instead of having <div> we replaced it with <React.Fragment> so it won't show two <div> when inspecting the borwser.
//Child class: Counter.
//Constructor of parant class: Component.
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    //tags: []
    //imageUrl: "https://picsum.photos/200" //generate randome 200x200 pix image. Then in return use:
    //<img src={this.state.imageUrl} alt="" />
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      //<React.Fragment>
      <div>
        {this.state.tags.length === 0 && "Please make new tag"}
        {this.renderTags()}
      </div>
      //</React.Fragment>
    );
  }
}

export default Counter;
*/
