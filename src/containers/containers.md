# 1. Containers

I would normally also use containers!  But this is a small, specific project that I opted to use with modules only instead - this time :) !

Containers should:
- Maintain the application state based on user interaction
- Be in control of rendering and re-rendering on a larger scale
- Pass props and configuration to children to maintain state

Containers should NOT:
- Apply styles or visual changes to the application

They should purely handle the flow of data and re-rendering

like...
```js
class myContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return {
      <div></div>
    )
  }
}

connect... with redux
```
