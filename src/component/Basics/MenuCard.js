import React from 'react'

const MenuCard = ({menuData}) => {
    //console.log(menuData)
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curElem) => {

const{id, name, category, image, description} =curElem;

 return(
    <>
    <div>
      <div className='card-container' key={id}>
        <div className='card'>
            <div className='card-body'>
              <span className='card-number card-circle subtle'>
                {id}
                </span>
              <span className='card-author subtle'>{curElem.name}</span>
              <h2 className='card-title'>{curElem.name}</h2>
              <span className='card-description subtle'>
              maggie is a Japanese noodle dish. It consists of Chinese-style wheat noodles 
              (or 中華麺, chūkamen) served in a broth; common flavors are soy sauce and miso,
               with typical toppings including sliced pork (chāshū), nori (dried seaweed), menma (
                bamboo shoots), and scallions. Ramen has its roots in Chinese noodle dishes.[1] 
                Nearly every region in Japan has its own variation of ramen, such as the tonkotsu
                 (pork bone broth) ramen of Kyushu and the miso ramen of Hokkaido.
              </span>
              <div className='card-read'>Read</div>
            </div>
            <img src={curElem.image} alt="images" className='card-media'/>
            <span className='card-tag subtle'> Order Now </span>
         </div>
    </div>
    </div>
    </>
)
    })}

</section>
    </>
  )
}

export default MenuCard
