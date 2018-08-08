# 2. Modules

Modules should:
- Style elements
- Combine multiple components
- Set their own state to react to user interaction

They are both presentational and interaction based. They are specific, self-contained components with managed state and styling.

like...
```js
const moduleStyles = theme => ({
  moduleElement: {
    position: 'relative',
  },
});

export class myCompontent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  actionHandler = () => {
    someAction();
  }

  render() {
    return {
      <div className={classes.moduleElement}></div>
    )
  }
}

connect... with redux
```
