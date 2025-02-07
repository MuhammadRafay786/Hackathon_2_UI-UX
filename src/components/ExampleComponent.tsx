import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [clientOnlyValue, setClientOnlyValue] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // This code will only run on the client
      setClientOnlyValue('This is a client-only value');
    }
  }, []);

  return (
    <div>
      <p>{clientOnlyValue}</p>
    </div>
  );
};

export default ExampleComponent;
