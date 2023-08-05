import "./Categories.css";
import { useCategory } from "../../context";
import axios from 'axios';
import { useEffect,useState } from 'react';



export const Categories=()=>{

    const [categories, setCategories] = useState([]);
    const [numberOfCategoryToShow,setNumberOfCategoryToShow]=useState(0);
    const {hotelCategory, setHotelCategory}=useCategory();

    const handleShowMoreRightClick=()=>{
    setNumberOfCategoryToShow((prev) => prev+10);
    };
    const handleShowMoreLeftClick=()=>{
        setNumberOfCategoryToShow((prev) => prev-10);
    };

    useEffect(()=>{
        (async ()=>{
            try{
                const {data} =await axios.get("https://exuberant-gold-fashion.cyclic.app/api/category");

                const categoriesToShow=data.slice(
                    numberOfCategoryToShow+10 > data.length ? data.length-10:numberOfCategoryToShow,
                    numberOfCategoryToShow > data.length ? data.length : numberOfCategoryToShow+10);
                setCategories(categoriesToShow);
            }catch(err){
                console.log(err);
            }
        })();
    },[numberOfCategoryToShow]);

    const handleCategoryClick=(category)=>{
     setHotelCategory(category);
    };
    

    return (
        <section className="categories d-flex align-center gap-large cursor-pointer ">
               {
                 numberOfCategoryToShow>=10 && (
                    <button className="button btn-category btn-left fixed cursor-pointer"
                    onClick={handleShowMoreLeftClick}>
                    <span className="material-icons-outlined">arrow_left</span>
                    </button>
                )}

       {categories && categories.map(({category,_id})=>
        <span className={`${category===hotelCategory ? "border-bottom":""}`} 
       key={_id} 
       onClick={()=>handleCategoryClick(category)}>{category}</span>)}
       {
        numberOfCategoryToShow -10 <categories.length && (
            <button className="button btn-category btn-right fixed cursor-pointer" 
            onClick={handleShowMoreRightClick}>
            <span className="material-icons-outlined">arrow_right</span>
             </button>
        )
       }
        </section>
    );       
}