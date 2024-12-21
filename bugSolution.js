```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = (event) => {
      setInitialUrl(event.url);
    };

    Linking.addEventListener('url', handleUrl);
    Linking.getInitialURL().then((url) => {
      if (url) {
        setInitialUrl(url);
      }
    });

    return () => {
      Linking.removeEventListener('url', handleUrl);
    };
  }, []);

  if (initialUrl) {
    return <Text>App opened with URL: {initialUrl}</Text>;
  } else {
    return <Text>No initial URL found</Text>;
  }
}

```