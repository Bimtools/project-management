import ClientOnly from "./components/ClientOnly";
import Home from './components/Home';

const page = () => {
  return (
    <div>
      <ClientOnly>
        <Home/>
      </ClientOnly>
    </div>
  );
};

export default page;
