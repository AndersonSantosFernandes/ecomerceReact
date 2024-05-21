import { Category } from "../category/category"


// export function Categories(props){ usando props
export function Categories({categories}){ //Desestruturando categories
    // console.clear()
    // console.log(categories)
    return(
        <div>
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