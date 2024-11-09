import styles from "./InputDiscover.module.css";
import { JSX } from "react";
interface InputDiscoverProps {
    title: string,
    placeholder: string,
    icon: JSX.Element
    className: string,
    type: string
}
export default function InputDiscover ({title,placeholder,icon,className,type}: InputDiscoverProps) {
    return (
        <div className={styles.inputItem}>
            <h2>{title}</h2>
            <input placeholder={placeholder} className={className} type={type}/>
            {icon}
        </div>
    )
}