import { useState, useEffect } from "react"
import { Item } from "./types/Item"
import { categories } from "./data/categories"
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter"
import { items } from "./data/items"
import { Body, Container, H1, Header } from "./App.styles"
import { TableArea } from "./components/TableArea"
import { InfoArea } from "./components/InfoArea"
import { AddContent } from "./components/AddContent"

function App() {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  },[list, currentMonth])

  useEffect(() => {
    let incomeCount = 0
    let expense = 0

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expense += filteredList[i].value
      }else{
        incomeCount += filteredList[i].value
      }
    }

    setIncome(incomeCount)
    setExpense(expense)

  },[filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

  return (
    <Container>
      <Header>
        <H1>Sistema Financeiro</H1>
      </Header>
      <Body>
        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <AddContent newItem={handleAddItem}/>
        <TableArea list={filteredList}/>
      </Body>
    </Container>
  )
}

export default App;
