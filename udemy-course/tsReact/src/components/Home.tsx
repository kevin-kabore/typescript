import * as React from 'react';

interface HomeProps {
  name: string;
  age: number;
}
// first generic is HomeProps interface, second is state
export class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <div>
        Hello there, {this.props.name}! You are {this.props.age} old, right?
      </div>
    );
  }
}
