import './ImageModal.css'
const ImageModal =({image,onclose})=>{
    return(
        <div>
            <div className="image-item1">
                <p className="close" onClick={onclose}>×</p>

                <img src={image} alt="" className="Selectedimage"/>

            </div>
        </div>
    )
}
export default ImageModal