import useCommand from "./useCommand";
import { logCommand } from "./commands";
import React from "react";
import Context from "../Context";

export default function Home() {

  const { value, setValue } = React.useContext(Context);
  const { execute, undo } = useCommand(logCommand);

  const funcA = () => {
    execute();
  }

  const funcB = () => {
    undo?.();
  }

  const funcC = () => {
    console.log('cccc');
  }

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={funcA}>A</button>
      <button onClick={funcB}>B</button>
      <button onClick={funcC}>C</button>
    </div>
  )
}
