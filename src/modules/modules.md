# 2. Modules

Modules should:
- Style elements
- Combine multiple compontents
- Set their own state to react to user interaction

They are both presentational and interaction based. They are specific, self-contained components with managed state and styling.

like...
```js
export class myCompontent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  actionHandler = () => {

  }

  render() {
    return {
      <div></div>
    )
  }
}

connect... with redux
```
