


export function FormImput({label, ...otherProps}){
    return(
        <div>
            
            <label>{label}</label>
            
            <input {...otherProps} className="form-input"/>
            
        </div>
    )
}