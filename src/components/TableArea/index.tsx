import { Item } from "../../types/Item"
import { TableItem } from "../TableItem"
import { Table, TH } from "./styles"

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <Table>
            <thead>
                <tr>
                    <TH width={100}>Data</TH>
                    <TH width={130}>Categoria</TH>
                    <TH>Título</TH>
                    <TH width={100}>Valor</TH>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index) => (
                        <TableItem key={index} item={item}/>
                    ))
                }
            </tbody>
        </Table>
    )
}