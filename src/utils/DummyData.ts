import {v4 as uuidV4} from 'uuid'
import bestPick4 from '../assets/uagoo-clone/Generic_TIle_Images-01.webp'
import bestPick2 from '../assets/uagoo-clone/Generic_TIle_Images-02_1.webp'
import bestPick3 from '../assets/uagoo-clone/Generic_TIle_Images-03.webp'
import bestPick1 from '../assets/uagoo-clone/Generic_TIle_Images-04.webp'
import logoImage1 from '../assets/uagoo-clone/bestseller.webp'
import logoImage2 from '../assets/uagoo-clone/easytocare.webp'
import logoImage3 from '../assets/uagoo-clone/xlplants.webp'
import logoImage4 from '../assets/uagoo-clone/ceramicpots.webp'
import logoImage5 from '../assets/uagoo-clone/vegetableseeds.webp'
import logoImage6 from '../assets/uagoo-clone/fertilizers.webp'
import bestSeller1 from '../assets/uagoo-clone/1_f3594aff-28ef-447a-92e2-320c5ae5b937 (1).webp'
import bestSeller2 from '../assets/uagoo-clone/Smallpot-164.webp'
import bestSeller3 from '../assets/uagoo-clone/2_430a864d-f4ed-46d0-b5e6-ff0d55c422db.webp'
import bestSeller4 from '../assets/uagoo-clone/LagosPlanter-Grey_f26c8dee-c8ce-4e1a-bec7-86006f560c98.webp'
import newArrival1 from '../assets/uagoo-clone/image_d3aa88cf-74fa-4673-bc2c-4ab3658c3978.webp'
import newArrival2 from '../assets/uagoo-clone/1_e87ec79e-3adc-4674-8d46-e3563e0309a9.webp'
import newArrival3 from '../assets/uagoo-clone/1_a86fba67-b3ae-4774-a1d8-8d5c6a091f10.webp'
import newArrival4 from '../assets/uagoo-clone/1_202d3e2e-6e24-4d36-b720-2bd3aa5cd09c.webp'
export const DummyHeaderData = {
    plants:['Indoor','Flowering','Low Maintainence','Air Purifying','Low Light','Cacti and Succelents','Hanging','Medicinal & Aromatic','Pet-Friendly','Fruit','Bundles','New Arrivals','Shop by Location','Subscriptions','Shop by Name'],
    seeds:['flower','Vegetable','microgreen','herb','flower','fruit','tree & grass'],
    pots:['Plastic','Ceramic','metal','wooden','hanging','plant','seedling','basket']
  }

  export const bannerData = [
    {
        id:uuidV4(),
        name:'banner1',
        url:'src/assets/uagoo-clone/1_12_fee6f911-f778-4fd9-bae8-979939f2e2a6.webp'
    },
    {
        id:uuidV4(),
        name:'banner2',
        url:'src/assets/uagoo-clone/2_11.webp'
    },
    {
        id:uuidV4(),
        name:'banner3',
        url:'src/assets/uagoo-clone/3_10_43141530-c3ec-45b0-8341-4396c6731f91.webp'
    }
  ]
  export const bestPickData = [
    {name:'plants',image:bestPick1},
    {name:'seeds',image:bestPick2},
    {name:'pots & planters',image:bestPick3},
    {name:'plant care',image:bestPick4}
]

export const logoBarData = [
    {name:'bestsellers',image:logoImage1},
    {name:'Easy to care',image:logoImage2},
    {name:'XL plants',image:logoImage3},
    {name:'Ceramic Pots',image:logoImage4},
    {name:'vegetable seeds',image:logoImage5},
    {name:'fertilizers',image:logoImage6}
]

export const bestSellerData= [
    {name:"Brazilian Wood Plant",image:bestSeller1},
    {name:"Peace Lilly Plant",image:bestSeller2},
    {name:"Monstera Deliciosa Plant",image:bestSeller3},
    {name:"Jade Plant Mini",image:bestSeller4},
]

export const newArrivalsData =[
    {name:"Brazilian Wood Plant",image:newArrival1},
    {name:"Peace Lilly Plant",image:newArrival2},
    {name:"Monstera Deliciosa Plant",image:newArrival3},
    {name:"Jade Plant Mini",image:newArrival4},
]

export const footerData = {
    aboutUs:["Our Story","Careers","Contact Us","Locate Stores","Own Grown","Garden Services & Maintenance"],
    customerCare:['Take The Plant Quiz','Track Order','Shipping Policy','Terms and Conditions','Privacy Polic','FAQs','Terms of Service','Refund policy'],
    offersRewards:['Plant Parent Rewards Club','Ugaoo Coupons'],
    
}