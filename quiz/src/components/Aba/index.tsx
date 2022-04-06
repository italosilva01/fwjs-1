import './style.css'
interface AbaProps {
    text:string
}

export const Aba = ({text}:AbaProps)=>{


    return (
        <div className="container-button">{text}</div>
    )
}