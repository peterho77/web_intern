import { useEffect } from 'react';

function UseEffect1(){

    const list1 = document.querySelectorAll("box__list ul li");
    console.log(list1);

    useEffect(()=>{
        const list1 = document.querySelectorAll(".box__list ul li");
        console.log(list1)
    });

    return (
        <>
            <div className="box box__list">
                <ul>
                    <li>Mục 1</li>
                    <li>Mục 2</li>
                    <li>Mục 3</li>
                </ul>
            </div>
        </>
    )
}

export default UseEffect1;