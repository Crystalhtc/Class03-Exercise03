import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function ExampleThree() {

    const [number, setNumber] = useState(0);
    
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

    useEffect(() => {
        console.log('changing number value: ' + colors);
    }, [number])

    return(
        <>
            <Header/>
            <main>
                <h1>Example 2</h1>
            </main>
            <Footer/>
        </>
    )
}