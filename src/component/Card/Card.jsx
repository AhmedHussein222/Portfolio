function Card({title}) {

    return(
        <>
            <div className="bg-secondary py-5 text-center col-3">
                <h4 className="border-bottom col-8 m-auto pb-2">{title}</h4>
            </div>
        </>
    )
}
export default Card