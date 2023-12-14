import './DealProduct.scss'
import imgGpu1 from './img/gpu_01.png'
import imgGpu2 from './img/gpu_02.png'


export default function DealProduct() {
    return (
        <div className='deal-product-container'>
            <div className='deal-product-card'>
                <div className='deal-card-img-part'>
                    <div className='deal-card-img-part__left'>
                        <img className="img-carroussel" src={imgGpu1} alt="gpu-img" />
                        <img className="img-carroussel" src={imgGpu1} alt="gpu-img" />
                        <img className="img-carroussel" src={imgGpu1} alt="gpu-img" />
                        <img className="img-carroussel" src={imgGpu1} alt="gpu-img" />
                    </div>
                    <div className='deal-card-img-part__right'>
                        <img className="img-carroussel-big" src={imgGpu2} alt="gpu-img" />
                    </div>
                    <button><span class="material-symbols-outlined">expand_content</span>Afficher</button>
                </div>
                <div className='deal-card-part-right'>
                    <div className='deal-card-part-right__header'>
                        <div className='card-header-left'>
                            <button><span class="material-symbols-outlined blue-style">remove</span></button>
                            <span className='red-style'>160°</span>
                            <button><span class="material-symbols-outlined red-style red-style-hover">add</span></button>
                        </div>
                        <div className='card-header-right'>
                            <button><span class="material-symbols-outlined red-style red-style-hover">share</span>Partager</button>
                            <button><span class="material-symbols-outlined red-style red-style-hover">forum</span>7</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}