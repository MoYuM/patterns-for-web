import React from "react";
import type { Context } from './index';

export type Command = (context: Context) => {
  execute: (val: any) => void,
  undo?: () => void,
}


export const addTodoCommand: Command = (context) => {
  let current: any;

  const getNewKey = () => {
    const max = context.list.sort((a, b) => b.key - a.key)[0]?.key;
    if (typeof max === 'number') {
      return max + 1;
    } else {
      return 1
    }
  }

  const execute = (val: string) => {
    current = context.list;
    const newKey = getNewKey();
    context.setList([...context.list, {
      todo: val,
      key: newKey,
      status: 'todo',
    }]);
    context.setValue('');
  }

  const undo = () => {
    if (current) {
      context.setList(current);
    }
  }

  return {
    execute,
    undo,
  }
}


export const changeValueCommand: Command = (context) => {
  let current: any;

  const execute = (val: string) => {
    current = context.value;
    context.setValue(val);
  }

  const undo = () => {
    if (current) {
      context.setValue(current);
    }
  }

  return {
    execute,
    undo,
  }
}

export const deleteCommand: Command = (context) => {
  let current: any;

  const execute = (key: number) => {
    current = context.list;
    const newList = context.list.filter(i => i.key !== key);
    context.setList(newList);
  }

  const undo = () => {
    if (current) {
      context.setList(current);
    }
  }

  return {
    execute,
    undo,
  }
}

export const finishCommand: Command = (context) => {
  let current: any;

  const execute = (key: number) => {
    current = context.list;
    const newList = context.list.map(i => {
      if (i.key === key) {
        return {
          ...i,
          status: 'finished' as any
        }
      } else {
        return i;
      }
    })
    context.setList(newList);
  }

  const undo = () => {
    if (current) {
      context.setList(current);
    }
  }

  return {
    execute,
    undo,
  }
}