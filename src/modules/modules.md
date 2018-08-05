# 2. Modules

Modules should:
- Style elements
- Combine multiple compontents
- Set their own state to react to user interaction

Modules Should Not:
- Update the shared state directly

They should purely be presentational and interaction based

like...
```js
export class myCompontent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return {
      <div></div>
    )
  }
}
```
