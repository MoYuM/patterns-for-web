import useCommand from "./useCommand";
import React from "react";
import { addTodoCommand, changeValueCommand, deleteCommand, finishCommand } from "./commands";

const CommandPattern: React.FC<{
  style?: React.CSSProperties;
  showUndo?: boolean;
  defaultTodo?: Todo[];
}> = ({
  style,
  showUndo = false,
}) => {
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
      <div className="not-prose font-mono" style={style}>
        <div className="text-2xl font-black">Todo List</div>
        <div>
          {showUndo && (
            <button onClick={onUndo} className="bg-orange-700 text-white px-3 rounded-lg text-lg cursor-pointer font-bold">UNDO</button>
          )}
          {/* <button className="bg-pink-700 ml-5 text-white px-3 rounded-lg text-lg cursor-pointer">reundo</button> */}
        </div>
        <input
          placeholder="Press enter to add a new todo"
          type="text"
          onKeyDown={onEnterDown}
          className="h-12 rounded-lg pl-5 text-2xl border-orange-500 border-2 border-solid mt-5 w-full"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <ul className="w-full text-2xl mt-5">
          {list.map((i) => (
            <li className="py-2 flex justify-between border-2 px-4 rounded-lg items-center mb-4" key={i.key}>
              <span className={`${i.status === 'finished' ? 'line-through text-gray-400' : ''}`}>{i.todo}</span>
              <div className="text-lg">
                <span className="cursor-pointer text-orange-500 font-bold" onClick={() => onDelete(i.key)}>DELETE</span>
                <span className="ml-5 cursor-pointer text-pink-500 font-bold" onClick={() => onFinish(i.key)}>FINISH</span>
              </div>
            </li>
          ))}
        </ul>
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



export default function ({
  defaultTodo,
  style,
}: {
  defaultTodo?: Todo[],
  style?: React.CSSProperties,
}) {

  const [value, setValue] = React.useState<string>('')
  const [list, setList] = React.useState<{ todo: string, key: number, status: 'todo' | 'finished' }[]>([]);

  React.useEffect(() => {
    if (defaultTodo) {
      setList(defaultTodo);
    }
  }, [defaultTodo]);

  return (
    <Context.Provider value={{
      value,
      list,
      setList,
      setValue,
    }}>
      <CommandPattern style={style} />
    </Context.Provider>
  )
}
