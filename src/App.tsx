import { useState, useEffect } from "react"
import { Item } from "./types/Item"
import { Category } from "./types/Category"
import { categories } from "./data/categories"
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter"
import { items } from "./data/items"
import { Body, Container, H1, Header } from "./App.styles"
import { TableArea } from "./components/TableArea"

function App() {
  const [list, setList] = useState<Item[]>(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  },[list, currentMonth])

  return (
    <Container>
      <Header>
        <H1>Sistema Financeiro</H1>
      </Header>
      <Body>
        <TableArea list={filteredList}/>
      </Body>
    </Container>
  )
}

export default App;
