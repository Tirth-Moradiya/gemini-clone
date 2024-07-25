import React from 'react'
import { Container } from 'react-bootstrap';
import { assets } from '../../assets/assets'
import ContextProvider, { Context } from '../context/Context';
import "./Main.css"
import { useContext } from 'react';

export default function Main()
 {
    const {onsent,recentprompt,showresult,loading,resultdata,setinput,input} = useContext(Context);
  return (
    <>
     <div className='main'>
        <div className='nav'>
            <p>Gemini 2.0</p>
            <img src={assets.user_icon}/>
        </div>

       
            <div className='main-container'>
            {
            !showresult?
            <>
            <div className='greet'>
                <p><span>Hello, Dev..</span></p>
                <p>How can I help you?</p>
            </div>
       

        <div className='cards'>
            <div className='card'>
                <p>Suggest Beautiful places for upcoming vacation..</p>
                <img src={assets.compass_icon}/>
            </div>
            <div className='card'>
                <p>Suggest Beautiful places for upcoming vacation..</p>
                <img src={assets.bulb_icon}/>
            </div>
            <div className='card'>
                <p>Suggest Beautiful places for upcoming vacation..</p>
                <img src={assets.message_icon}/>
            </div>
            <div className='card'>
                <p>Suggest Beautiful places for upcoming vacation..</p>
                <img src={assets.code_icon}/>
            </div>
        </div>
        </>:
            <div className='result'>
                <div className='result-title'>
                <img src={assets.user_icon}/>
                <p>{recentprompt}</p>
                </div>
                <div className='result-data'>
                <img src={assets.gemini_icon}/>
                {loading?
                    <div className='loader'>
                    <hr/>
                    <hr/>
                    <hr/>
                    </div>
                :<p>{resultdata}</p>
                }
                </div>
            </div>
        }

        

        <div className='main-bottom'>
            <div className='search-box'>
                    <input onChange={(e)=>setinput(e.target.value)} value={input}  type="text" placeholder='Enter Prompt here..'/>
                <div>
                    <img src={assets.gallery_icon}/>
                    <img src={assets.mic_icon}/>
                    <img onClick={()=>onsent()} src={assets.send_icon}/>
                </div>
            </div>

            <div className='bottom-info'>
                <p>Gemini 2.0 may display incorrect info please cross check it!</p>
            </div>
        </div>
   </div>
</div>
   </>
  )
}
