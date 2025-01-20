```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Effect running once:', count);
    return () => {
      console.log('Cleanup function running once');
    };
  }, []);

  useEffect(() => {
    // This effect runs when 'count' changes
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