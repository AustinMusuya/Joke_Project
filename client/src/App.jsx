import { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking backend...");

  useEffect(() => {
    async function checkBackend() {
      try {
        const response = await fetch("/api/health");

        if (!response.ok) {
          throw new Error("Backend request failed");
        }

        const data = await response.json();

        setBackendStatus(data.message);
      } catch (error) {
        setBackendStatus("Unable to connect to backend.");
        console.error(error);
      }
    }

    checkBackend();
  }, []);

  return (
    <main>
      <h1>🤡 JokeLab 2.0</h1>
      <p>React frontend is running!</p>
      <p>{backendStatus}</p>
    </main>
  );
}

export default App;
