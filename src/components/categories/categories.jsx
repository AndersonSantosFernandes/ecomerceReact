import { Category } from "../category/category"
import './categories.scss'

// export function Categories(props){ usando props
export function Categories({categories}){ //Desestruturando categories
    // console.clear()
    // console.log(categories)
    return(
        <div className="categories-container">

           {
            categories.map((category)=>{
                return(
                    //Ao renderizar vários componentes utilizar "key" como abaixo para o react atualizar cada componente separadamente 
                    <Category  category={category} key={category.id}/>
                )
            })
           }
        </div>
    )
}