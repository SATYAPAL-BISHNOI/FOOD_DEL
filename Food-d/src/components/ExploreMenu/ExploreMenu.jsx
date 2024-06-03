import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'


const ExploreMenu = ({category, setCategroy}) => {

  return (
    <div className='explore-menu' id='explore-menu'>

        <h1>Explore our menu</h1>

        <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate veniam molestias tempora ad expedita magnam natus, facilis possimus. Enim saepe fugit rem sed illum quos optio natus officiis corporis consectetur!</p>

        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategroy(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":" "} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
            <hr />
    </div>
  )
}

export default ExploreMenu