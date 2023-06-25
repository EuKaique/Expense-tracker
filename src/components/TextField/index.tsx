import { Input } from "./styles"

type Props = {
    id: string,
    name: string,
    type: string,
    value: any,
    OnChange: any
}

export const TextField = ({id, name, type, value, OnChange} : Props) => {
    return <Input 
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={OnChange}
            />
}