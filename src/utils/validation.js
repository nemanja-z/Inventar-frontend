export default function validate(setError, {data:{errors}}){
    if(errors){
        Object.keys(errors).forEach((key)=>{
            return setError({[key]:errors[key]})
            })
    }
    
}