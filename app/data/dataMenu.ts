'use client';
import { IconType } from "react-icons";
import { AiOutlineDollar, AiOutlineReconciliation, AiOutlineSolution, AiOutlineUser } from "react-icons/ai";

export interface MenuItemData{
    id:number,
    title:string,
    router:string,
    role:string,
    icon:IconType
}

const MenuData:MenuItemData[]=[
    {
        id:1,
        title:'Projects',
        router:'Test',
        role:'test',
        icon:AiOutlineDollar
    },
    {
        id:2,
        title:'Clients',
        router:'Test',
        role:'test',
        icon:AiOutlineSolution

    },
    {
        id:3,
        title:'Suppliers',
        router:'Test',
        role:'test',
        icon:AiOutlineReconciliation
    },
    {
        id:4,
        title:'Users',
        router:'Test',
        role:'test',
        icon:AiOutlineUser
    }
]

export default MenuData;
