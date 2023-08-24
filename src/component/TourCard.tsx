import React from 'react'
interface IProps{
    imageUrl:string;
    heading:string
}
const TourCard:React.FC <IProps>= (props) => {
  return (
    <>
    <div className="col-md-3 mb-5">
        <div className="card">
        <img src={props.imageUrl} alt=""/>
        <div className="card-body">
        <p className='h4'>{props.heading}</p>
        <p>Lorem ipsum dolor sit, amet consecteturexercitationem itaque fugiat quod dolorem consectetur laudantium laboriosam facere repellat tempora. Ducimus voluptatibus facere inventore reiciendis laboriosam ex, nemo quas deserunt!</p>     
        </div>
        <div className="card-footer">
        <div className="d-grid gap-2 col-12 mx-auto">
        <button className='btn btn-primary heartbeat' type="button">Book Now <i className="bi bi-arrow-right p-2"></i></button>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default TourCard