import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/item';

import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    item: Item;
    onDone: (id: number, done: boolean) => void;
    onDelete: (id: number) => void;
}

export const ListItem = ({ item, onDone, onDelete }: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    const handleDone = () => {
        onDone(item.id, isChecked);
    };
    const handleDelete = () => {
        onDelete(item.id);
    };

    return (
        <C.Container>
            <C.Label style={{ textDecoration: item.done ? 'line-through' : 'initial' }}>
                {item.title}
            </C.Label>
            <C.Input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
                onClick={handleDone}
            />
            <C.IconDeleteArea onClick={handleDelete}>
                <DeleteIcon fontSize="large" />
            </C.IconDeleteArea>

        </C.Container>
    );
}
