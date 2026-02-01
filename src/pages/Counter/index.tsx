import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const App = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount !== null) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count.toString());
    //sessionStorage.setItem('count', count.toString());
  }, [count]);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const removeCount = () => {
    setCount(0);
    localStorage.removeItem('count');
    //sessionStorage.removeItem('count');
  };

  const clear = () => {
    setCount(0);
    localStorage.clear();
    //sessionStorage.clear();
  };

  return (
    <Container>
      <Title>Counter: {count}</Title>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={removeCount}>Remove Count</button>
      <button onClick={clear}>Clear</button>
    </Container>
  );
};

export default App;
