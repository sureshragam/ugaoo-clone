import React from "react"
import classes from "./HeaderLink.module.css"

interface PropType {
    data:string[],
    name:string
}

const  HeaderLink:React.FC<PropType> = ({data,name}) =>{
    return(
        <li>
            <a href={name}>{name}</a>
            <div className={classes.dropdown}>
                <ul>
                    {data.map((eachPlant:string)=>{
                    return <li>{eachPlant} {name}</li>
                    })}
                </ul>
            </div>
        </li>
    )
  }

  export default HeaderLink