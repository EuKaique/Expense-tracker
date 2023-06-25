export const onlyCharacters = (chat: string) => {
    chat = chat.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "") 
    return chat
}

export const onlyNumbers = (chat: string) => {
    return chat.replace(/\D/g,"")
}