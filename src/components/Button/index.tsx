import { Btn } from "./styles"

type Props = {
    type: "button" | "submit"
    disabled?: boolean
    text: string
    loading?: boolean
    OnClick?: any
}

export const Button = ({ type, disabled, text, loading, OnClick}: Props) => {
    return (
        <>
            {loading === true
             ?
                <Btn type={type} disabled={disabled}>
               
                </Btn>
             : 
              <Btn type={type} disabled={disabled} onClick={OnClick}>
                {text}
              </Btn>
            }

        </>
    )
}