# 3. Components

Components should:
- Style elements
- Handle only presentation
- Be stateless

Components Should Not:
- Make api requests
- Or set state on their own

They should purely be presentational

like...
```js
export const myCompontent = ({children, stuff}) => (
  <button className="btn btn--primary">
    {children}
  </button>
);
```
