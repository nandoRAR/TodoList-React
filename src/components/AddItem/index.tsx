import { keyboardKey } from '@testing-library/user-event';
import { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as C from './styles';


type Props = {
    onAddItem: (taskTitle: string) => void
};

export const AddItem = ({ onAddItem }: Props) => {

    const notify = () => toast("Campo Obirgatório");
    const [inputText, setInputText] = useState('');
    const clearWaitingQueue = () => toast.clearWaitingQueue();

    const handleKeyUp = (e: keyboardKey) => {
        if (e.code === 'Enter' && inputText !== '') handleAddItem();
        if (e.code === 'Enter' && inputText === '') {
            notify();
            clearWaitingQueue();
        }
    };
    const handleAddItem = () => {
        if (inputText !== '') {
            onAddItem(inputText);
            setInputText('');
        } else {
            notify();
            clearWaitingQueue();
        }
    };

    return (
        <C.Container>
            <ToastContainer
                position="top-left"
                hideProgressBar
                closeOnClick
                limit={1}
            />
            <C.Input
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            <C.IconArea onClick={handleAddItem}>
                <AddBoxIcon fontSize="large" />
            </C.IconArea>

        </C.Container>
    )
}