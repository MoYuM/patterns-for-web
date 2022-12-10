import React from "react";

export type Command = (context: any) => {
  execute: () => void,
  canExecute: () => boolean,
  undo?: () => void,
}

export const logCommand: Command = (context: any) => {
  const valueRef = React.useRef(context.value);

  const canExecute = () => {
    return context.canLog;
  }

  const execute = () => {
    valueRef.current = context.value;
    context.setValue('123');
  }

  const undo = () => {
    context.setValue(valueRef.current);
  }

  return {
    execute,
    canExecute,
    undo,
  }
}
