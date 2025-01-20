```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including the initial render
    console.log('Effect running:', count);
    return () => {
      console.log('Cleanup function running');
    };
  }, []); // Empty dependency array means it only runs once

  useEffect(() => {
    // This effect runs whenever the 'count' variable changes
    console.log('Count changed:', count);
    return () => {
      console.log('Cleanup function running');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```