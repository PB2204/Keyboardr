
import { useRouter } from 'next/router'

export default function AboutWithId(){
    const router = useRouter()
    

    return(
        
            <div>
                <h1 style={{color:'red'}}>This is the about page with id {router.query.id}</h1>
            </div>
        
    )
}