import Progress from "../Progress/Progress";

function Skills() {
  return (
    <>
      <div className="text-center p-5 ">
        <h2 className="mb-5">Skills</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero
          tempora cupiditate voluptates provident incidunt, doloribus obcaecati
          facere? Suscipit nisi itaque distinctio quae officia velit quis
          maiores repellendus vel eius?
        </p>
        <div className="col-12 d-flex justify-content-around mt-5 bg-secondary">
            <div className="col-3">
                <h3 className="border-bottom ">Focus</h3>
                <ul className="list-unstyled text-start px-5">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                </ul>
            </div>
            <div className="  col-6">
                
                
                    <Progress title={'Html'} value={95}/>
                    <Progress title={'CSS'} value={80}/>
                    <Progress title={'Bootstrap'} value={80}/>
                    <Progress title={'Angular'} value={78}/>
                    <Progress title={'React'} value={50}/>
            </div>
           
        </div>
            
      </div>
    </>
  );
}
export default Skills;
