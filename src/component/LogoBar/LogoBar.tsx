import React from "react"
import classes from './LogoBar.module.css'
interface data{
    name:string,
    image:string
}

interface defaultProps extends React.PropsWithChildren{
    data:data[],
    styleProp?:React.CSSProperties,
    title:string,
}

export const LogoBar:React.FC<defaultProps> = ({data,styleProp,title,children}) =>{
    return (
        <section className={classes.logobar}>
            <h2 style={{textAlign:"center",fontSize:'2.5rem',lineHeight:'30px',fontStyle:"normal",color:'#0a4c36',fontWeight:300,textTransform:'capitalize'}}>{title}</h2>
            <ul>
                {data.map((eachData) =>{
                    return <li style={styleProp}>
                        <img src={eachData.image} alt={eachData.name}/>
                        <p>{eachData.name}</p>
                        {children}
                    </li>
                })}
            </ul>
        </section>
    )
}