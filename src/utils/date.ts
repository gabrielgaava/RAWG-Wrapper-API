export const formatDate = (date: Date) => {
    
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    return `${year}-${month}-${day}`;
}

export const fullMonth = () => {
    
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    
    const formatedMonth = month < 10
        ? `0${month}`
        : `${month}`
    
    const start = `${year}-${formatedMonth}-01`;
    const end = `${year}-${formatedMonth}-31`;
    
    return `${start},${end}`;
    
}