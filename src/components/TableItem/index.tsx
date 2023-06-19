import { Item } from "../../types/Item"
import { TD, TR } from "./styles"
import { formatDate } from "../../helpers/dateFilter"

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <TR>
            <TD>{formatDate(item.date)}</TD>
            <TD>{item.category}</TD>
            <TD>{item.title}</TD>
            <TD>R$ {item.value}</TD>
        </TR>
    )
}