const Card = ({ img, title, desc }) => {
    return (
        <div className="text-center m-4">
            <img src={img} alt="no" className="h-64 " />
            <h5 className="text-2xl mb-1 bold">{title}</h5>
            <span >{ desc}</span>
        </div>
    )
}

export default Card
