import React from 'react'
import "../../../src/index.css"

export default function Register() {
  return (
    <div className='containerforms'>
        <form>
            <div id='header'>Registro</div>
            <div className='containerInput'>

                <div>

                    <label>Username</label>

                </div>
                
                <input type='username' placeholder='Cabrito Estevez dos Santos'/>
            </div>

            <div className='containerInput'>
                <div>

                    <label>Email</label>

                </div>
                <input  type='email' placeholder='cabrito@edu.br'/>
            </div>

            <div className='containerInput'>
                <div><label>Password</label></div>
                <input  type='password' placeholder='@edubr123'/>

            </div>
                <button id='btnconfirma'>Register</button>
        </form>

    </div>
  )
}
