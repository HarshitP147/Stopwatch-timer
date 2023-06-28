import { MouseEventHandler, JSX } from "react"

type functionType = (arg: any) => void

interface propTypes {
    className: string,
    children: string | JSX.Element,
    onClick?: MouseEventHandler<HTMLButtonElement> | functionType
}

export default function Button({ className, children, onClick }: propTypes) {
    return (
        <button onClick={onClick} className={`px-3 py-2 rounded-md text-xl shadow-lg mx-6 transition-all shadow-gray-500 ${className}`}>{children}</button>
    )
}
