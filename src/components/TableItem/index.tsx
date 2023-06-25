import { Item } from "../../types/Item"
import { Category, TD, TR, Value } from "./styles"
import { formatDate } from "../../helpers/dateFilter"
import { categories } from "../../data/categories"

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <TR>
            <TD>{formatDate(item.date)}</TD>
            <TD>
                <Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Category>
            </TD>
            <TD>{item.title}</TD>
            <TD>
                <Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </Value>
            </TD>
        </TR>
    )
}