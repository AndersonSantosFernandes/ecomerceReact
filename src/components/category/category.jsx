
export function Category({category}){ 
    
const {imageUrl, title} = category 

    // console.log(category)
    return(
        <div>
           <div>
            <h2>{title}</h2>
            <p>Comprar agora</p>
           </div>
        </div>
    )
}