import { deflateRaw } from "zlib"
import { Item } from "../types/Item"

export const getCurrentMonth = () => {
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: string) => {
    let newList: Item[] = []
    let [year, month] = date.split('-')

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ){
            newList.push(list[i])
        }
    }
    return newList
}

const addZeroToDate = (n: number): string => {
    if(n < 10){
        return `0${n}`
    }
    return `${n}`
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}