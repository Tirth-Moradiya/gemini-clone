import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'

export default function Sidebar()
 {
    const [extend,setextend]=useState()
  return (
    <div className='sidebar'>
        <div className='top'>
            <img onClick={()=>setextend(prev=>!prev)} className='menu'  src={assets.menu_icon}/>
            <div className='new-chat'>
                <img  src={assets.plus_icon}/>
                {extend?<p>New chat</p>:null}
            </div>
            {extend?
            <div className='recent'>
                <p className='recent-title'>Recent</p>
                <div className='recent-entry'>
                    <img src={assets.message_icon}/>
                    <p>What is war....</p>
                </div>
            </div>:null}
        </div>
        <div className='bottom'>
            <div className='bottom-item recent-entry'>
                <img src={assets.question_icon}/>
                {extend?<p>Help</p>:null}
            </div>

            <div className='bottom-item recent-entry'>
                <img src={assets.history_icon}/>
                {extend?<p>Activities</p>:null}
            </div>

            <div className='bottom-item recent-entry'>
                <img src={assets.setting_icon}/>
                {extend?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}
