export interface MenuItemData{
    id:number,
    title:string,
    router:string,
    role:string
}

const MenuData:MenuItemData[]=[
    {
        id:1,
        title:'Projects',
        router:'Test',
        role:'test'
    },
    {
        id:2,
        title:'Clients',
        router:'Test',
        role:'test'
    },
    {
        id:3,
        title:'Suppliers',
        router:'Test',
        role:'test'
    },
    {
        id:4,
        title:'Users',
        router:'Test',
        role:'test'
    }
]

export default MenuData;
