export type TodoType = {
    id: string,
    task: string,
    completed: boolean,
    color: string,
    deleted: boolean,
    createdAt: string,
    updatedAt: string
}

export type TodoProps = {
    hasLimit: boolean
    placeholder: string
}