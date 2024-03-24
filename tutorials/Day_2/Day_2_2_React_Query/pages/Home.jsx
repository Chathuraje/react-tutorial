import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cats from "../components/Cats";

export default function Home() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div>
      <center>
        <h1>Welcome to the Home Page!</h1>
      </center>

      <QueryClientProvider client={client}>
        <div>
          <center>
            <Cats />
          </center>
        </div>
      </QueryClientProvider>
    </div>
  );
}
