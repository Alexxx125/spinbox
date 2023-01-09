import React,{useState} from 'react';
import ad from './assets/images/ad.mp4';
import ad2 from './assets/images/ad2.mp4';
import ad3 from './assets/images/ad3.mp4';
import ad4 from './assets/images/ad4.mp4';
import trade from './assets/images/trade.png';
import trade2 from './assets/images/trade2.jpeg';
import trade3 from './assets/images/trade3.png';
import trade4 from './assets/images/trade4.png';
import logo from './assets/images/logo-no-background.png';
import Card from './Card.js'

function App() {
    const images = [ad,trade,ad2,trade2,ad3,trade3,ad4,trade4]
    const [stop,setStop]=useState(`running`)
    let radius = 400;

  return (
    <div id='dragBox'>
    <div id='spinBox' style={{animationPlayState:`${stop}`}}>
    {/* <image src={recycle} alt='recycle'/> */}
     {images.map((image,index)=>{
      const rotateY = `rotateY(${index*(360/images.length)}deg) translateZ(${radius}px)`
      const transition = `transform 1s`;
      const transitionDelay = `${(images.length-index)/4}s`;

        return (
          <>
          <Card
            key={index}
            index={index}
            image={image}
            rotateY={rotateY}
            transition={transition}
            transitionDelay={transitionDelay}
            setStop={setStop}
           />
          </>
        )
     })}
      <div id='focusBox' style={{backgroundImage:`url(${logo})`}}>
      </div>
      <div id='ground' style={{transform: `translate(-50%,-50%) rotateX('90deg')`}}></div>
    </div>
    </div>
  );
}

export default App;





















// const [expand,setExpand] = useState(0)
// <div className='wrap'>
// {images.map((image,index)=>{
//    const active = expand===index ? images.length*0.6 : images.length*0.4/(images.length-1)
//    return (
//        <Card key={index} index={index} image={image} active={active} setExpand={setExpand}/>
//    )
// })}
// </div>