const submit=document.querySelector('.btn');
const celcius=document.querySelector('.Celcius');
const farenheit=document.querySelector('.Farenheit');
const kelvin=document.querySelector('.Kelvin');
const weather_image=document.querySelector('.weather_image');


const conditionImage={
  extraCold:'https://images.unsplash.com/photo-1578403881549-b80b37102b94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
  cold:'https://images.unsplash.com/photo-1613416721396-6565d7b3dcb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  normalCold:'https://images.unsplash.com/photo-1520889905494-a9ba556b0cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80',
  normal:'https://images.unsplash.com/photo-1614434163906-5520f43d4e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80',
  warm:'https://images.unsplash.com/photo-1632652507598-a6773059c6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  desert:'https://images.unsplash.com/photo-1451418280345-67a6b4d10bba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  lava:'https://images.unsplash.com/photo-1619266465172-02a857c3556d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
  paracut:'https://images.unsplash.com/photo-1554388110-e8dbad26d195?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
}


const updateImage=(temp)=>{
  if(temp < (-10)){
   weather_image.setAttribute('src',conditionImage.extraCold)
  }else if(temp > (-10) && temp <= 0){
   weather_image.setAttribute('src',conditionImage.cold)
  }else if(temp > 0 && temp <= 15){
   weather_image.setAttribute('src',conditionImage.normalCold)
  }else if(temp > 15 && temp <= 25){
   weather_image.setAttribute('src',conditionImage.normal)
  }else if(temp > 25 && temp <= 35){
   weather_image.setAttribute('src',conditionImage.warm)
  }else if(temp > 35 && temp <=1000){
   weather_image.setAttribute('src',conditionImage.desert)
  }else if(temp > 1000){
    weather_image.setAttribute('src',conditionImage.lava)
   }else{
    weather_image.setAttribute('src',conditionImage.paracut)
  }
}


let lastEdit=''

const updateLastEdit=()=>{
   celcius.addEventListener("keyup",(e)=>{
    lastEdit='celcius';
   })

   farenheit.addEventListener("keyup",(e)=>{
      lastEdit='farenheit'
        })

   kelvin.addEventListener("keyup",(e)=>{
      lastEdit='kelvin'
   }) 
}
updateLastEdit();



const convert=(lastEdited)=>{
    if(lastEdited==='celcius'){
      const fvalue=(parseFloat(celcius.value) * 9/5 )+ 32
      const kvalue=(parseFloat(celcius.value) + 273)

      farenheit.value=Math.floor(fvalue) + ' °F';
      kelvin.value=Math.floor(kvalue) + ' K';

    }else if(lastEdited==='farenheit'){
      const cvalue=(parseFloat(farenheit.value)-32) *5/9
      const kvalue=(parseFloat(farenheit.value)-32) *5/9 + 273

      celcius.value = Math.floor(cvalue) + ' °C';
      kelvin.value=Math.floor(kvalue) + ' K';

    }else if(lastEdited==='kelvin'){
      const cvalue=parseFloat(kelvin.value)-273
      const fvalue=(parseFloat(kelvin.value)-273.15) * 9/5 +32 

      celcius.value = Math.floor(cvalue) + ' °C';
      farenheit.value=Math.floor(fvalue) + ' °F';

    }
}


submit.addEventListener('click',()=>{
  convert(lastEdit);

  let temp=0;
  if(lastEdit==='celcius'){
    temp=celcius.value;

  }else if(lastEdit==='farenheit'){
    temp=(parseFloat(farenheit.value)-32) *5/9

  }else if(lastEdit==='kelvin'){
    temp=parseFloat(kelvin.value)-273
  }
  updateImage(temp);
})




























