import React from 'react'

const Navbar = (props) => {
    
  return (
    <>
    
    <nav id='navbar'>

        <div>
            <h2 style={{color:'red',fontSize:'xx-large',marginLeft:'15px'}}>Kalvium Books</h2>
        </div>

        <div id='searchbar' style={{display : props.showBooks ? 'block' : 'none'}}>

            <input id='searchbox' type='text' placeholder='Search Here...' onKeyDown={(e)=>{if(e.key==='Enter'){props.handleSearch(e),console.log(e)}}}/>   
        
        </div>

        <div style={{width:'13vw'}}>

            <button id='register' onClick={props.showBooks ? props.displayReg : props.displayBooks}>{props.showBooks ? 'Register' : 'Home'}</button>

        </div>

    </nav>
    
    </>
  )
}

export default Navbar