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
        router:'/projects',
        role:'test',
        icon:AiOutlineDollar
    },
    {
        id:2,
        title:'Clients',
        router:'/clients',
        role:'test',
        icon:AiOutlineSolution

    },
    {
        id:3,
        title:'Suppliers',
        router:'/suppliers',
        role:'test',
        icon:AiOutlineReconciliation
    },
    {
        id:4,
        title:'Users',
        router:'/users',
        role:'test',
        icon:AiOutlineUser
    }
]

export default MenuData;
