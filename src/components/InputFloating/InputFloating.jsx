import { FloatingLabel } from "flowbite-react";

export default function InputFloating(props) {
    const { label, color = 'base', value, onClick, onChange, type = 'text', tabIndex } = props

    return (
        <FloatingLabel tabIndex={tabIndex} variant="standard" type={type} onClick={onClick} onChange={onChange} label={label} defaultValue={value} className={`text-${color} text-sm peer-focus:text-${color} focus:border-${color} border-${color}`} />
    )
}