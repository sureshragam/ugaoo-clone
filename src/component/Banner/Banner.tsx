import classes from "./Banner.module.css"
import banner1 from '../../assets/uagoo-clone/1_12_fee6f911-f778-4fd9-bae8-979939f2e2a6.webp'
import banner2 from '../../assets/uagoo-clone/2_11.webp'
import banner3 from '../../assets/uagoo-clone/3_10_43141530-c3ec-45b0-8341-4396c6731f91.webp'
import gpay from '../../assets/uagoo-clone/Desktop_Google_Play_Button_decbe13e-879c-43f6-ae59-d23224715246.avif'
import appStore from '../../assets/uagoo-clone/Desktop_App_Store_Button_fc5a2c57-76d5-4ca9-ac67-ed49bbe8f510 (1).avif'
import bannerSmall1 from "../../assets/uagoo-clone/banner_mob_1.webp"
import bannerSmall2 from "../../assets/uagoo-clone/banner_mobile_2.webp"
import bannerSmall3 from "../../assets/uagoo-clone/banner_mobile_3.webp"
import bannerSmall4 from "../../assets/uagoo-clone/banner_mobile_4.webp"
import { useEffect, useState } from "react"

const images = [banner1,banner2,banner3]
const smallImages =[bannerSmall1,bannerSmall2,bannerSmall3]

const Banner = () =>{
    const [currentIndex,setCurrentIndex] = useState(1)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentIndex((prevIndex)=>{
                if (prevIndex ===3) return 1
                return prevIndex+1
            })
        },10000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[])
    return(
        <div className={classes.banner}>
            <div className={`${classes.bannerImageContainer} ${classes.largebanner}`}>
                {images.map((eachImage,index) =>{
                    return <img key={index}src={eachImage} alt="banner" className={`${classes.bannerImage} ${
                        index+1 === currentIndex ? classes.active : ""
                      }`}/>
                })}
            </div>
            {/* for small screen */}
            <div className={`${classes.bannerImageContainer} ${classes.smallbanner}`}>
                {smallImages.map((eachImage,index) =>{
                    return <img key={index}src={eachImage} alt="banner" className={`${classes.bannerImage} ${
                        index+1 === currentIndex ? classes.active : ""
                      }`}/>
                })}
            </div>
            <div className={classes.bannerContent}>
                <p>Download app!</p>
                <button type="button">
                    <a href="https://play.google.com/store/apps/details?id=com.ugaoo.android">
                    <img src={gpay} alt="Google PLay"/>
                    </a>
                </button>
                <button>
                    <a href="https://apps.apple.com/us/app/ugaoo/id6502299028">
                    <img src={appStore} alt="App Store"/>
                    </a>
                </button>
            </div>
            </div>
            
    )
}

export default Banner