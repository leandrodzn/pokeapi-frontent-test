import { ListPage } from "@/pages/ListPage.tsx";
import { Footer } from "@/components/Footer.tsx";

function App() {
  return (
    <>
      <header className="relative flex justify-center">
        <span className="absolute left-0 text-sm text-gray-600">
          Leandro Dzib
        </span>
      </header>
      <ListPage />
      <Footer />
    </>
  );
}

export default App;
