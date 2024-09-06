import style from "./megasena.module.css"

import Imagem from "./imagem"
import Sorteio from "./sorteio"

export default function megasena() {

    return(
        <>
        <Imagem />

        <div className={style.numeros}>


        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        </div>
        <p className={style.p}>Estimativa de prêmio do próximo concurso 03/09/2024: R$ 30.000.000,00</p>
        <p className={style.p}>Acumulado próximo concurso R$ 23.432.471,91</p>
        <p className={style.p}>Acumulado próximo concurso final zero/cinco (2770) R$ 20.000.001,91</p>
        <p className={style.p}>Acumulado para Sorteio Especial Mega da Virada R$ 94.345.766,23</p>
        </>
    )
}
