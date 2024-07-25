import { Children, createContext } from "react";
import runChat from "../config/Gemini";
import { useState } from "react";

export const Context=createContext()

const ContextProvider=(props)=>{
    
    const [input, setinput] = useState("");
    const [recentprompt, setrecentprompt] = useState("");
    const [prevpromt, setprevpromt] = useState([]);
    const [showresult, setshowresult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultdata, setresultdata] = useState("");


    const delaypara = (index,nextword) =>{

    }




    const onsent = async (prompt)=>{

        setresultdata("")
        setloading(true)
        setshowresult(true)
        setrecentprompt(input)
        const response =  await runChat(input)

        // let responsearray=response.split("**")

        // let newarray;

        // for(let i=0;i<responsearray.length;i++){
        //     if(i===0 || i%2 !== 1){
        //         newarray+=responsearray[i];
        //     }
        //     else{
        //         newarray+="<br>"+responsearray[i]+"</br>"
        //     }
        // }

        // let newarry2=newarray.split("*").join("</br>")
        setresultdata(response)
        setloading(false)
        setinput()
    }
    
    const contextValue={
            prevpromt,
            setprevpromt,
            onsent,
            setrecentprompt,
            recentprompt,
            showresult,
            loading,
            resultdata,
            input,
            setinput
    }



    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider