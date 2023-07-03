import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() { 
  return(
  <>
  <div className='card'>
    <Avatar/>
    <div className='data'>
      <Intro/>
      <SkillList/>
       </div>
    </div>
  </>
  );
  }
  
function Avatar() {
  return <img className='Avatar' str='S__2883594.jpg' alt='My Avater'/>;
}
function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='Unity' emoji='🖕'color='yellow'/>
      <Skill skill='Video' emoji='💪'color='orange'/>
      <Skill skill='React' emoji='🦶'color='yellow'/>
      <Skill skill='Myspl' emoji='🙏'color='red'/>
    </div>
  );
}
function Skill(props){
  return(
    <div className='skill' style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span></span>
    </div>
  );

  }
function Intro(){
  return(
    <div>
      <h1>ทิพยรัตน์ เสพศรีสุข</h1>
      <p>
        นักศึกษาคณะวิทยาศาสตร์สาขาเทคโนโลยีสารสนเทศเเละการสื่อสาร
        มหาวิทยาลัยอุบลราชธานี ชื่นชอบการออกแบบ การวาดภาพ การเล่นเกมการนอน
      </p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);