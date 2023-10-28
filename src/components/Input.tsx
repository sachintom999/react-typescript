import { ReactSetState } from "../types/utils"

type Input = {
    type: "text" | "checkbox" | "color"
    inputValue: string
    setInput: ReactSetState<string>
}

export default function Input({ type, inputValue, setInput }: Input) {
    return (
        <>
            <input
                type={type}
                value={inputValue}
                onChange={e => setInput(e.target.value)}
            />
        </>
    )
}
