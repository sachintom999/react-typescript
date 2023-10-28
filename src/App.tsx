import React, { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import ItemsList from "./components/ItemsList"
import { type Task } from "./types/utils"

export default function App() {
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState<Task[]>([])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setInput("")
        setTasks(prev => {
            return [...prev, { id: Date.now().toString(), desc: input }]
        })
    }

    return (
        <div className="bg-slate-600 w-screen h-screen flex flex-col items-center justify-center">
            <form
                className="flex justify-between w-[250px]"
                onSubmit={handleSubmit}
            >
                <Input type="text" inputValue={input} setInput={setInput} />
                {/* <button
                    type="submit"
                    className="border px-4 text-sm rounded-sm"
                >
                    add
                </button> */}
                <Button className="border px-4 text-sm rounded-sm">add</Button>
            </form>

            <div className="w-[150px]">
                <ItemsList tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    )
}
