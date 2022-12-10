import React from 'react';
import { Command } from './commands';
import Context from '../Context';

const useCommand = (command: Command) => {
	const context = React.useContext(Context);

	const { execute, canExecute, undo } = command(context);

	return {
		execute: () => {
			if (canExecute()) {
				execute();
			} else {
				console.log('can not execute this command')
			}
		},
		undo,
	}
};

export default useCommand;
