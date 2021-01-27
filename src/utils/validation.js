export default function validate(setError, {data:{errors}}){
    if(errors){
        Object.keys(errors).forEach((key)=>{
            setError({[key]:errors[key]});
            return;
            })
    }
    
}