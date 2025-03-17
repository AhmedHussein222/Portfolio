import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress({title ,value}) {
  return (
    <div className='d-flex p-2  '>
       
        <p className='text-center w-25 bg-success'>{title}</p> <ProgressBar variant="info" now={value} className='col-8 ' />


    </div>
  );
}

export default Progress;