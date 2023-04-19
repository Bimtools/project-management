import Projects from "./components/project/Projects";
import ClientOnly from "./components/ClientOnly";

const page = () => {
  return (
    <div>
      <ClientOnly>
        <Projects />
      </ClientOnly>
    </div>
  );
};

export default page;
