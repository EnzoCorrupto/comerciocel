import React from 'react'
 import "../../index.css"

export default function Login() {
  return (
    <div className='containerforms'>
        <form>
            <div id='header'>Login</div>
            <div className='containerInput'>

                <div>

                    <label>Username</label>

                </div>
                
                <input type='username' placeholder='Cabrito Estevez dos Santos'/>
            </div>


            <div className='containerInput'>
                <div><label>Password</label></div>
                <input  type='password' placeholder='@edubr123'/>

            </div>
                <button id='btnconfirma'>Login</button>
        </form>

    </div>
  )
}
