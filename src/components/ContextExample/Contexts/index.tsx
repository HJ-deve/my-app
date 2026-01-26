import React, { createContext, useState } from 'react';

type CountContextValue = {
  count: number;
  plusCount: () => void;
};

const CountContext = createContext<CountContextValue>({
  count: 0,
  plusCount: () => {},
});

interface Props {
  children: React.ReactNode;
}

const CountProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  const plusCount = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        plusCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
