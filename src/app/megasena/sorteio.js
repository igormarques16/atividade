import style from "./megasena.module.css"

export default function Sorteio() {
 let NumeroDoSorteio = (parseInt((Math.random() * 59 ) + 1)).toString().padStart(2, "0")
    
  return (
    <>
    <p className={style.sorteio}>{NumeroDoSorteio}</p>
    </>
  )
} 
