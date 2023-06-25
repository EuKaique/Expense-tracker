import { Button } from "../Button"
import { SelectField } from "../SelectField"
import { TextField } from "../TextField"
import { Box, Container, Label, Text } from "./styles"
import { categories } from "../../data/categories"
import { useState } from "react"
import { Item } from "../../types/Item"
import { items } from "../../data/items"
import { onlyCharacters, onlyNumbers } from "../../utils/mask"

type Props = {
    newItem: (item: Item) => void
}

export const AddContent = ({ newItem }: Props) => {
    const [loading, setLoading] = useState(false)

    const [date, setDate]       = useState('')
    const [title, setTitle]     = useState('')
    const [value, setValue]     = useState('')
    const [options, setOptions] = useState(null)

    let newOptions = []
    newOptions.push({value: categories.food['title'],   label: categories.food['title']})
    newOptions.push({value: categories.rent['title'],   label: categories.rent['title']})
    newOptions.push({value: categories.salary['title'], label: categories.salary['title']})

    const handleData = (event: any) => {
        setDate(event.target.value)
    }

    const handleTitle = (event: any) => {
        setTitle(onlyCharacters(event.target.value))
    }

    const handleValue = (event: any) => {
        setValue(onlyNumbers(event.target.value))
    }

    const handleOptions = (event: any) => {
        setOptions(event)
    }

    function clearFields(){
        setDate('')
        setOptions(null)
        setTitle('')
        setValue('')
    }

    function handleAddEvent(){
        let year  = parseInt(date.split('-')[0])
        let month = parseInt(date.split('-')[1]) - 1
        let day   = parseInt(date.split('-')[2])
    
        let food   = options?.['value'] === 'Alimentação' ? 'food'   : ''
        let rent   = options?.['value'] === 'Aluguel'     ? 'rent'   : ''
        let salary = options?.['value'] === 'Salário'     ? 'salary' : ''
    
        const data = {
            date: [year, month, day],
            category: food ? food : rent ? rent : salary,
            title: title,
            value: parseInt(value)
        }
        if(data !== null){
            newItem({ 
                date: new Date(year, month, day), 
                category: data.category, 
                title: data.title, 
                value: data.value 
            })
            clearFields()
        }
    }

    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
                <Label>
                    <Text>Data</Text>
                    <TextField 
                        id="data"
                        name="data"
                        type="date"
                        value={date}
                        OnChange={handleData}
                    />
                </Label>
                <Label>
                    <Text>Categoria</Text>
                    <SelectField 
                        id="categoria"
                        name="categoria"
                        OnChange={handleOptions}
                        options={newOptions}
                        value={options}
                        placeholder="-- Selecione --"
                    />
                </Label>
                <Label>
                    <Text>Título</Text>
                    <TextField 
                        id="titulo"
                        name="titulo"
                        type="text"
                        value={title}
                        OnChange={handleTitle}
                    />
                </Label>
                <Label>
                    <Text>Valor</Text>
                    <TextField 
                        id="valor"
                        name="valor"
                        type="text"
                        value={value}
                        OnChange={handleValue}
                    />
                </Label>
                <Box>
                    <Button type="button" text="Adicionar" OnClick={handleAddEvent} loading={loading}/>
                </Box>
            </div>
        </Container>
    )
}