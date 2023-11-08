import React,{useState} from 'react';           

function Counter() {
    const[count,setCount] = useState(0);        //0 dan başla

    function increment(){                       //1 artır
        

        if(count === 10){                          //10 dan yukarı cıkamasın
            alert("Daha fazla yükseltemezsin.")
        }
        else{
            setCount(count  +1)
        }
    }
    function decrement(){                       //1 azalt
        
        if(count === 0){                        //0 dan aşagı inemezsin.
            alert("Daha fazla düşüremezsin.")
        }
        else{
            setCount(count  -1)
        }
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button className="btn btn-success" onClick={increment}>Increment</button>
            <button className="btn btn-danger" onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;