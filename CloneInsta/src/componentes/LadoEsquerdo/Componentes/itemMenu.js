

export default function ItemMenu(props){
    return(
        <div className='itemMenu'>
            <span className='icone'>{props.icone}</span>
            <span className='texto'>{props.texto}</span>
        </div>
    )
}