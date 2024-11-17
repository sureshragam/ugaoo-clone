import React from 'react';
import logo from './assets/uagoo-clone/logo.avif'
import classes from "./App.module.css"
import HeaderLink from './component-lib/HeaderLink/HeaderLink';
import { bestPickData, bestSellerData, DummyHeaderData, footerData, logoBarData, newArrivalsData } from './utils/DummyData';
import Banner from './component/Banner/Banner';
import { CardsComponent } from './component-lib/CardsComponent/CardsComponent';
import sitOut from '../src/assets/uagoo-clone/Sitout_Area_Final-2.webp'
import recycle from '../src/assets/uagoo-clone/Packaging_2x_small_67a5f444-bdcc-4d0b-a3d1-8a5d31cff366_medium.avif'
import replacement from '../src/assets/uagoo-clone/Returns_2x_small_0924bced-0e21-493e-8e74-922d93b34a53_medium.avif'
import selfwater from '../src/assets/uagoo-clone/Pot_2x_small_5598237e-2d07-4270-a7bb-95482177c4e0_medium.avif'
import plantSubscription from '../src/assets/uagoo-clone/Subscription_Stop_Motion.webp'
import rewardClub from '../src/assets/uagoo-clone/PPC.webp'
import arrow from '../src/assets/uagoo-clone/arrow.svg'

function App() {
  return (
    <div className="App">
      <header className={classes.header}>
        <img src={logo} alt="Ugaoo"/>
        <nav>
          <ul>
            <HeaderLink name='Plants' data={DummyHeaderData.plants}/>
            <HeaderLink name='Seeds' data={DummyHeaderData.seeds}/>
            <HeaderLink name='Pots & Planters' data={DummyHeaderData.pots}/>
            <li>Plant Care</li>
            <li>Gifting</li>
            <li>BLog</li>
            <li>Offers</li>
            <li>
              <input type='search' placeholder="Search for plants, seeds and planters..."/>
            </li>
            <li>icon</li>
            <li>icon</li>
            <li>icon</li>
          </ul>
        </nav>
      </header>
      <Banner/>
      <CardsComponent data={logoBarData} styleProp={{width:'10rem'}} title=''/>
      <CardsComponent data={bestPickData} styleProp={{width:'20rem'}} title='Best Picks'/>
      <CardsComponent data={bestSellerData} styleProp={{width:'20rem'}} sale={true} title='Best Sellers'>
        <p style={{marginBlock:0,color:'rgb(20, 146, 83)'}}>From 499</p>
        <button 
        style={{backgroundColor:' #149253',width:'100%',
          borderStyle:'none',padding:'1rem 2rem',
          borderRadius:'5px',color:'white',
          fontFamily:'"Outfit", sans-serif',
          fontWeight:'600',fontStyle:'normal',
          letterSpacing:'2.4px',textTransform:'uppercase',
          border:'1px solid rgb(20, 146, 83)',
          cursor:'pointer',
          marginTop:0
        }}
        >View Product
        </button>
      </CardsComponent>
      <CardsComponent data={newArrivalsData} title='new arrival' sale={true} discount="-16%" styleProp={{width:'20rem'}}>
      <p style={{marginBlock:0,color:'rgb(20, 146, 83)'}}>From 499</p>
        <button 
        style={{backgroundColor:' #149253',width:'100%',
          borderStyle:'none',padding:'1rem 2rem',
          borderRadius:'5px',color:'white',
          fontFamily:'"Outfit", sans-serif',
          fontWeight:'600',fontStyle:'normal',
          letterSpacing:'2.4px',textTransform:'uppercase',
          border:'1px solid rgb(20, 146, 83)',
          cursor:'pointer',
          marginTop:0
        }}
        >View Product
        </button>
      </CardsComponent>
      <iframe
      style={{border: 'none', aspectRatio:'16:9'}}
      loading='lazy'
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
       title="This is a plant! Ugaoo Series A Funding Announcement" src="https://www.youtube.com/embed/Rfqr64hIBK8?rel=0" width="100%" height={500}></iframe>
      <section>
        <h2>Shop the look</h2>
        <img src={sitOut} alt="Shop The look" width='100%' />
      </section>
      <section className={classes.whyUgaoo}>
        <h2>why Ugaoo</h2>
        <article>
          <div>
            <img src={recycle} alt="Recycle"/>
            <p>Secure and Recyclable Packaging</p>
          </div>
          <div>
            <img src={replacement} alt="Replacement"/>
            <p>Free Replacements if Damaged</p>
          </div>
          <div>
            <img src={selfwater} alt="Self Water"/>
            <p>Self-Watering Pots with Every Plant</p>
          </div>
        </article>
        <iframe
      style={{border: 'none', aspectRatio:'16:9'}}
      loading='lazy'
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
       title="This is a plant! Ugaoo Series A Funding Announcement" src="https://www.youtube.com/embed/Xq2iDxLWgB0?list=TLGG-t9mV2bVfmsxNzExMjAyNA"width="100%" height={500}></iframe>
      </section>
      <section>
        <article style={{padding:'2rem 3rem'}}>
          <h2>Experience the magic of growing plants</h2>
          <p style={{width:'80%',margin:'auto'}}>Ugaoo is here to inspire you to have plants around you. To look at life in a very different way, helping you connect with nature. Each plant you buy is packed and shipped with care, from our 25-acre farm to your doorstep.</p>
        </article>
      </section>
      <section className={classes.plantSubscription}>
        <article>
          <div>
            <img src={plantSubscription} alt="Plant Subscription"/>
          </div>
          <div>
            <h2>Plant Subscriptions</h2>
            <p>Receive a curated box of handpicked plants, packaged with care, every month.</p>
            <button className={classes.exploreboxes}>explore boxes</button>
          </div>
        </article>
      </section>
      <section className={classes.customerFeedback}>
        <h2>From happy plant parents</h2>
        <div className={classes.testimonals}>
          <img src="https://www.ugaoo.com/cdn/shop/files/Customer_Testimonial_Thumbnails_Pragyasmita_b904b211-a09b-4ffd-a87e-833a7ec1abf8.jpg?v=1670915878&width=70" alt="testimonial1"/>
          <img src="https://www.ugaoo.com/cdn/shop/files/Customer_Testimonial_Thumbnails_Aishwarya.jpg?v=1661747317&width=140" alt="testimonial2"/>
          <img src="https://www.ugaoo.com/cdn/shop/files/Customer_Testimonial_Thumbnails_Samarth_copy_04ecab66-f2d0-418c-804f-24c1e7a6c08d.jpg?v=1670915967&width=140" alt="testimonial3"/>
        </div>
        <span className={classes.rating}></span>
        <p>After receiving this plant <span>(Monstera Deliciosa)</span>, the plant was mature,tall as promised with a healthy growth...it was well hydrated and full of node..The packaging was great... Thank you @ugaoo for this delightful Monstera.. I'll be happy to buy it again</p>
        <span>- Aishwarya Roy</span>
      </section>
      <section className={classes.rewardClub}>
        <article>
          <div>
            <img src={rewardClub} alt="Reward Club"/>
          </div>
          <div>
            <h2>Join our Plant Parent Rewards Club</h2>
            <p>Every plant purchase is a gift that keeps on giving. Earn coins and redeem them for exclusive discounts.</p>
            <button style={{width:'250px',marginRight:'1rem'}}>learn more</button>
            <button style={{width:"250px"}}>refer a friend</button>
          </div>
        </article>
      </section>
      <section className={classes.about}>
        <article>
          <h2>About Ugaoo</h2>
          <p>As India’s largest and most trusted online plant nursery and gardening store, Ugaoo is here to bring you only the best for all your gardening and plant needs. From exotic indoor plants for your homes to flowering plants and succulents for your ornamental gardens, we bring you all the plants you may want! We also specialize in the highest quality seeds, organic fertilizers, premium pots and planters, and garden tools for effective plant care. So, turn a new leaf and start your gardening journey with Ugaoo!</p>
        </article>
        <div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/24.png?v=1729281964" alt="Plants Grow People"/>
              <span>Plants Grow People</span>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/24.png?v=1729281964" alt="Plants Grow People"/>
              <span>Plants Grow People</span>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/24.png?v=1729281964" alt="Plants Grow People"/>
              <span>Plants Grow People</span>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/24.png?v=1729281964" alt="Plants Grow People"/>
              <span>Plants Grow People</span>
            </div>
        </div>
        <hr></hr>
        <footer>
          <article className={classes.aboutus}>
            <h3>About US</h3>
            <ul>
              {footerData.aboutUs.map((value:string) =>{
                return <li>{value}</li>
              })}
            </ul>
          </article>
          <article className={classes.footerCol}>
            <h3>customer care</h3>
            <ul>
              {footerData.customerCare.map((value:string) =>{
                return <li>{value}</li>
              })}
            </ul>
          </article>
          <article className={classes.footerCol}>
            <h3>offers & rewards</h3>
            <ul>
              {footerData.offersRewards.map((value:string) =>{
                return <li>{value}</li>
              })}
            </ul>
          </article>
          <article>
            <h3>Get in touch</h3>
            <p>call: +91-9129912991</p>
            <p>Email: support@ugaoo.com</p>
          </article>
          <article>
            <h3>Sign up for our newsletter</h3>
            <div className={classes.inputcontainer}>
              <input type="email" placeholder='Enter email address'/>
              <img src={arrow} alt="arrow"/>
            </div>
            <p style={{fontWeight:'400'}}>For plant care tips, our featured plant of the week, exclusive offers and discounts</p>
          </article>
        </footer>
      </section>
    </div>
  );
}

export default App;
