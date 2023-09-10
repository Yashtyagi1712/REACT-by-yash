import React from 'react'

const Navbar = ({FilterItems, menuList}) => {
  return (
    <>
      <nav className='navbar'>
  <div className='btn-group'>
    <button className='btn-group__items' 
    onClick={() => FilterItems("breakfast")}>
        breakfast
        </button>
    <button className='btn-group__items'
    onClick={() => FilterItems("lunch")}
    >lunch</button>
    <button className='btn-group__items'
    onClick={() => FilterItems("evening")}
    >evening</button>
    <button className='btn-group__items'
    onClick={() => FilterItems("dinner")}
    >dinner</button>
    <button className='btn-group__items'
    onClick={() => FilterItems("all")}
    >all</button>
    </div>
    </nav>
    </>
  )
}

export default Navbar
