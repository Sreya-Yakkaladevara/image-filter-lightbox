import React, { useState } from "react";
import './ImageGallery.css'
import ImageModal from "./ImageModal";
let img = [
    'http://surl.li/fzriiz',
    'http://surl.li/uhkhuw',
    'http://surl.li/zppksf',
    'http://surl.li/thyfuu',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
    'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhQEfu0sJA5okoGWi_1tYb0RIoCVan5S41w&s'
]
const ImageGallery =()=>{
    let [selectedImage,setSelectedImage] = useState("");
    let openModal = (e)=>{
        setSelectedImage(e);
    }
    let closeModal = ()=>{
        setSelectedImage(null);
    }
  return(
 
    <>
    <p></p>
    <div className="image-item">
        {img.map((e,index)=>{
           return <img key={index} src={e} alt="" className="image" onClick={()=>{openModal(e)}}/>
        })}
    </div>
    {selectedImage && <ImageModal image={selectedImage} onclose={closeModal}/>}
   </>
   


  )
}
export default ImageGallery