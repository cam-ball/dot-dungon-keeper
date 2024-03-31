import { AsciiLogo } from "../utilities/constants";

const Heading = () => {
  return (
    <>
      <div className="text-center">
        <pre role="img" aria-label=".dungeon ascii logo">
          {AsciiLogo}
        </pre>
        <h2 className="my-5 font-mono">.dungon//remastered keeper</h2>
      </div>
    </>
  );
};

export default Heading;
