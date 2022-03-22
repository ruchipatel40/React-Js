import React from "react";

class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.callMe = this.callMe.bind(this);
  }

  // ParentClass function
  callMe() {
    console.log("This is a method from parent class");
  }

  render() {
    return false;
  }
}

export default class Example extends ParentClass {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
      super();
    }
    render() {
      this.callMe();
      return false;
    }
  }