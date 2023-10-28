export type Task = {
    id: string
    desc: string
}

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>
