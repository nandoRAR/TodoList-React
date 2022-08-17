const BASEAPI = 'http://localhost:5000';


export const api = {

    allTodo: async () => {
        const res = await fetch(`${BASEAPI}/todo`);
        const json = await res.json();
        return json;
    },
    createTodo: async (title: string) => {
        const res = await fetch(`${BASEAPI}/todo`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title})
        });
        const json = await res.json();
        return json;
    },
    updateTodo: async (id:number, title?:string, done?:string) => {
        const res = await fetch(`${BASEAPI}/todo/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title, done})
        });
        const json = await res.json();
        return json;
    },
    deleteTodo: async (id:number) => {
        const res = await fetch(`${BASEAPI}/todo/${id}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const json = await res.json();
        return json;
    },

}