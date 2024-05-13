import React from 'react'


const tabNav = ({ id, title, activeTab, setActiveTab }) => {
    function handleClick() {
        setActiveTab(id)
    }
  return (
    <button onClick={handleClick} className={(activeTab === id ? "after:scale-100" : 'after:scale-0') +  ' active hover:text-red-400 border-b-black border-b px-12 py-4 smooth'} >{title}</button>
  )
}

export default tabNav