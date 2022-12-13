import React from 'react';
import { Context } from './index';
import { Command } from './commands';

const useCommand = () => {
	const context = React.useContext(Context);
	const stack = React.useRef<any[]>([]);

	const execute = (command: Command, params?: any) => {
		const commandOjb = command(context);
		stack.current.push(commandOjb);
		commandOjb.execute(params);
	}

	const undo = () => {
		const obj = stack.current.pop();
		if (obj) {
			obj.undo();
		}
	}

	return {
		execute,
		undo,
	}
};

export default useCommand;
