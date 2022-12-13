import useCommand from "./useCommand";
import React from "react";
import { addTodoCommand, changeValueCommand, deleteCommand, finishCommand } from "./commands";

const CommandPattern = () => {

  const { list, value } = React.useContext(Context);
  const { execute, undo } = useCommand();

  const onDelete = (key: number) => {
    execute(deleteCommand, key);
  }

  const onFinish = (key: number) => {
    execute(finishCommand, key);
  }

  const onAdd = (val: string) => {
    execute(addTodoCommand, val);
  }

  const onChange = (val: string) => {
    execute(changeValueCommand, val);
  }

  const onUndo = () => {
    undo();
  }

  const onEnterDown = (e: any) => {
    if (e.code === 'Enter') {
      onAdd(value);
    }
  }

  return (
    <div className="bg-slate-100 w-full flex justify-center">
      <div className="w-2/3 mt-20">
        <div className="mb-10">
          <button onClick={onUndo} className="bg-orange-700 text-white px-3 rounded-lg text-lg cursor-pointer">undo</button>
          {/* <button className="bg-pink-700 ml-5 text-white px-3 rounded-lg text-lg cursor-pointer">reundo</button> */}
        </div>
        <input type="text" onKeyDown={onEnterDown} className="w-full h-20 border-orange-500 border-2 rounded-2xl pl-10 text-2xl" value={value} onChange={(e) => onChange(e.target.value)} />
        <ul className="w-full text-2xl mt-5">
          {list.map((i) => (
            <li className="py-2 flex justify-between border-2 px-4 rounded-lg items-center mb-4" key={i.key}>
              <span className={`font-bold ${i.status === 'finished' ? 'line-through text-gray-400' : ''}`}>{i.todo}</span>
              <div className="text-lg">
                <span className="cursor-pointer text-orange-500 font-bold" onClick={() => onDelete(i.key)}>DELETE</span>
                <span className="ml-5 cursor-pointer text-pink-500 font-bold" onClick={() => onFinish(i.key)}>FINISH</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const Context = React.createContext<Context>({
  value: '',
  list: [],
  setList: () => { },
  setValue: () => { },
});


type Todo = {
  todo: string, key: number, status: 'todo' | 'finished'
}

export type Context = {
  value: string,
  list: Todo[],
  setValue: (val: string) => void,
  setList: (list: Todo[]) => void,
}



export default function () {

  const [value, setValue] = React.useState<string>('')
  const [list, setList] = React.useState<{ todo: string, key: number, status: 'todo' | 'finished' }[]>([]);

  return (
    <Context.Provider value={{
      value,
      list,
      setList,
      setValue,
    }}>
      <CommandPattern />
    </Context.Provider>
  )
}
