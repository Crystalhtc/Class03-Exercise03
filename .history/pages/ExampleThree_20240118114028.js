import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function ExampleThree() {

    const [number, setNumber] = useState(0);
    
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

    useEffect(() => {
        if(number == array.length) {
            console.log(colors);
        }
        console.log('changing number value: ' + colors[number]);
    }, [number]
    )

    return(
        <>
            <Header/>
            <main>
                <h1>Example 3</h1>
                <button style={{backgroundColor: colors[number]}}
                onClick={() => setNumber(number + 1)}>
                    Increment Number
                </button>
                <div>
                    {number}
                </div>
            </main>
            <Footer/>
        </>
    )
}