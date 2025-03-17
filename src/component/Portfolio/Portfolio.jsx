import Card from "../Card/Card"

function Portfolio() {
    return(
        <>

        <h1 className="ms-5">Portfolio</h1>
        <div className="d-flex flex-wrap gap-5 justify-content-center">
            <Card title={'Web Deesign'}/>
            <Card title={'Mobile Design'}/>
            <Card title={'Logo Design'}/>
            <Card title={'Web Application'}/>
            <Card title={'Mobile Application'}/>
            <Card title={'PWA Development'}/>
        </div>
        </>
    )
}
export default Portfolio