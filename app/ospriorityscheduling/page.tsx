"use client"
import { useState } from "react";

export default function OSPS(){
    const [p1_AT , setp1_AT] = useState(0);
    const [p2_AT , setp2_AT] = useState(0);
    const [p3_AT , setp3_AT] = useState(0);
    const [p4_AT , setp4_AT] = useState(0);
    const [p5_AT , setp5_AT] = useState(0);
    
    function handleAT(event: any){
        setp1_AT(a => event.target.value)
        console.log(p1_AT)
    }
    return(
        <div className="border border-black-500 w-full h-[90%] flex flex-col pl-20 pr-20 bg-[#0a0d12] justify-center items-center">
            <table className="border border-white  border-collapse w-[50%] h-[50%]">
                <thead className="border border-white [&>tr>th]:text-center [&>tr>th]:border-white">
                    <tr className="border border-white text-white">
                        <th>PROCESS NUMBER</th>
                        <th>Arrival time</th>
                        <th>burst time</th>
                        <th>turn around time</th>
                        <th>waiting time</th>
                    </tr>
                </thead>
                <tbody className="border border-white [&>tr>td>input]:text-center [&>tr>td]:border-white text-white border-collapse">
                    <tr>
                        <td><h1>P1</h1></td>
                        <td><input type="number" onChange={handleAT} value={p1_AT}/></td>
                        <td><input type="number"/></td>
                        <td><h1>{}</h1></td>
                        <td><h1>{}</h1></td>
                    </tr>
                    <tr>
                        <td><h1>P1</h1></td>
                        <td><input type="number" value={p2_AT}/></td>
                        <td><input type="number"/></td>
                        <td><h1>{}</h1></td>
                        <td><h1>{}</h1></td>
                    </tr>
                    <tr>
                        <td><h1>P1</h1></td>
                        <td><input type="number" value={p3_AT}/></td>
                        <td><input type="number"/></td>
                        <td><h1>{}</h1></td>
                        <td><h1>{}</h1></td>
                    </tr>
                    <tr>
                        <td><h1>P1</h1></td>
                        <td><input type="number" value={p4_AT}/></td>
                        <td><input type="number"/></td>
                        <td><h1>{}</h1></td>
                        <td><h1>{}</h1></td>
                    </tr>
                    <tr>
                        <td><h1>P1</h1></td>
                        <td><input type="number" value={p5_AT}/></td>
                        <td><input type="number"/></td>
                        <td><h1>{}</h1></td>
                        <td><h1>{}</h1></td>
                    </tr>
                </tbody>
            </table>

            {}
        </div>
    );
}