import React, {useState} from 'react';

function Header(){

    const [openMenu, setOpenMenu] = useState(false);
  
    const abrirMenu = () => setOpenMenu(true);
    const fecharMenu = () => setOpenMenu(false);
    

    return(
        <div className='Div-header'>
            <header className='Header'>
                <div className='sub-header'>
                    <h1 className='Logo1'>Port<span className='Logo2'>folio</span></h1>
                        <button className="btt" onClick={abrirMenu} id='btt-menu'>
                            <img className='Menu' src="./images/menu.png" alt="Menu"/>
                        </button>
                    {openMenu && (
                        <nav className={`navBar ${openMenu ? 'visible' : 'hidden'}`}>
                        <button className='btt' onClick={fecharMenu} id='btt-close'>
                            <img className='Close' src="./images/close.png" alt="Close" />
                        </button>
                        <ul className='content-list'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    )}
                </div>
            </header>
        </div>
);
}

export default Header





{/* <nav className='nav-small'>
                <h1 className='h1p'>Port<span className='h1p2'>folio</span></h1>
                <ul className="nav-list" id='nav-list'>
                    <li className="nav-li-list">
                        <span>
                            <img src="./images/close.png" alt="close" 
                            className='close'/>
                        </span>
                        <a href="#">Home</a>
                        <a href="#">Skills</a>
                        <a href="#">Products</a>
                        <a href="#">Support</a>
                    </li>
                </ul>
                <span>
                    <img src="./images/menu.png" 
                    alt="menu" height={'50px'} className="menu"/>
                </span>
            </nav> */}