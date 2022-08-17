import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { api } from './helpers/api';
import { Item } from './types/item';
import { AddItem } from './components/AddItem';
import { ListItem } from './components/ListItem';

function App() {

	const [listTodo, setListTodo] = useState<Item[]>([]);
	useEffect(() => {
		const getList = async () => {
			const data = await api.allTodo();
			setListTodo(data.listTodo);
		};
		getList();
	}, []);

	const handleAddItem = async (taskTitle: string) => {
		const res = await api.createTodo(taskTitle);
		let newList = [...listTodo];
		newList.push(res.todo);
		setListTodo(newList);
	};

	const handleDoneItem = async (id: number, done: boolean) => {
		let newList = listTodo.map(item => {
            if (item.id === id) {
                item.done = !item.done;
            }
            return item;
        });
		setListTodo(newList);
		done = !done;
		await api.updateTodo(id, undefined, done.toString());
	};

	const handledeleteItem = async (id: number) => {
		let newList = listTodo.filter(item => item.id !== id);
		setListTodo(newList);
		await api.deleteTodo(id);
	};


	return (
		<C.Container>
			<C.Area>
				<C.Header>Minhas Tarefas</C.Header>
				<AddItem onAddItem={handleAddItem} />
				{listTodo && listTodo.map((item, index) => (
					<ListItem key={index} item={item} onDone={handleDoneItem} onDelete={handledeleteItem} />
				))}
			</C.Area>
		</C.Container>
	);
}

export default App;
