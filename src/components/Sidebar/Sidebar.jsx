import React from 'react'
import './sidebar.css';
import userIcon from "./../../assets/user-icon.svg";
import chevron from "./../../assets/chevron.svg";


const Sidebar = ({open, onClose}) => {
  return ( open ?
    <div className='full-view'>
      <div className='pop-up-background'>
          <div className='sidebar'>
            <button className='sidebar-signin-btn'> <img src={userIcon} alt="signin btn" className='user-icon'/>Hello, dytto</button>
            {content.map((data)=>(
              <ContentContainer data={data} key={data.title}/>
            ))}
          </div>

          <button onClick={onClose} className='sidebar-close-btn'>X</button>
      </div>
    </div> : <></>
  )
}

const ContentContainer = ({data}) => {
  return(
    <div className="content-container">
      <div className="content-title">{data.title}</div>
      <ul className="content-list">
        {data.contentList.map((item)=>(
          <li className='content'>{item.name} 
          {item.open ? <img src={chevron} alt="more-item" className='chevron'/> : <></>}
        </li>
        ))}
      </ul>
    </div>
  )
}

const content = [
  {
    title : "Digital Content & Devices",
    contentList : [
      {
        name : "Amazon Music",
        open : true
      },
      {
        name : "Kindle E-readers & Books",
        open : true
      },
      {
        name : "Amazon Appstore",
        open : true
      }
    ]
  },
  {
    title : "Shop by Department",
    contentList : [
      {
        name : "Electronics",
        open : true
      },
      {
        name : "Computer",
        open : false
      },
      {
        name : "Smart Home",
        open : true
      },
      {
        name : "Arts& Crafts",
        open : true
      }
    ]
  },
  {
    title : "Programs & Features",
    contentList : [
      {
        name : "Gift Cards",
        open : true
      },
      {
        name : "Shop By Interest",
        open : false
      },
      {
        name : "Amazon Live",
        open : true
      },
      {
        name : "International Shopping",
        open : true
      }
    ]
  },
  {
    title : "Help & Settings",
    contentList : [
      {
        name : "Your Account",
        open : false
      },
      {
        name : "🌐 English",
        open : false
      },
      {
        name : "Customer Service",
        open : false
      },
      {
        name : "Sign Out",
        open : false
      }
    ]
  }
]


export default Sidebar
