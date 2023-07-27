import React from 'react'
import Header from './Header';
import Slider from './Slider';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Home() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };




  return (
    <div>


    
    <Header/>

    <Slider/>


    <div className='p'>
        <h1 className='opt'>Vegatable</h1>
      <Carousel responsive={responsive}>
      
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>

      </Carousel>
</div>


<div className='p'>
<h1 className='opt'>Fruits</h1>
      <Carousel responsive={responsive}>
      
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>

      </Carousel>
</div>


<div className='p'>
<h1 className='opt'>Nuts</h1>
      <Carousel responsive={responsive}>
      
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>

      </Carousel>
</div>
      

<div className='p'>
<h1 className='opt'>Dairy</h1>
      <Carousel responsive={responsive}>
      
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>

      </Carousel>
</div>



    
    </div>







    
    
  )
}

function Card() {
    return ( 
  <div className="card">
        <img className="product--image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrQrsROVXGOlufnsQvyDjao0YrE80gyrQPw&usqp=CAU" className="card-img-top" alt="product image" />
        <h2>Tomato</h2>
        <p className="price">Rs. 120.00</p>
        
        <div className='container w-100'>
                      
                      <select className='m-2 h-100  bg-success rounded'>
                          {Array.from(Array(6), (e, i) => {
                              return (
                                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                              )
                          })}
                      </select>
  
                      <select className='m-2 h-100  bg-success rounded'>
                          <option value="">250g Pack</option>
                          <option value="">500g Pack</option>
                          <option value="full">1kg Pack</option>
                      </select>
  
                      
                  </div>
  
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    );
  }

export default Home