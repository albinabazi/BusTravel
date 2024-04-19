import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';




  const Feedback = () => {

  const [dbFeedback, setdbFeedback] = useState([]);
  const [sorted, setSorted] = useState({sorted:'id', reversed:false});

  function getFeedbacks(){
    const url = 'https://localhost:3000/api/feedback'; 
    fetch(url, {
      method: 'GET',
     
    })
    .then(response => response.json())
    .then(feedbacksFromServer => {
      console.log(feedbacksFromServer);
      setdbFeedback(feedbacksFromServer);
    })
    .catch(error => {
      console.log(error);
    });
  }


  function deleteFeedback(id){
    const url = `https://localhost:3000/api/feedback/${id}`; 
    fetch(url, {
      method: 'DELETE',
      
    })
    .then(response => {
      if (response.ok) {
        console.log(response);
        alert('Feedback është fshirë me sukses!');
        getFeedbacks();
      } else {
        throw new Error('Failed to delete feedback.');
      }
    })
    .catch(error => {
      console.log(error);
      alert('Ky feedback nuk mund te fshihet!');
    });
}

const sortByDate = () => {
  setSorted({sorted:"", reversed: !sorted.reversed});
  const feedbackCopy = [...dbFeedback];
  feedbackCopy.sort((dateA,dateB) =>
  {
    const fulldateA = dateA.date;
    const fulldateB = dateB.date;
 
    if(sorted.reversed){
      return fulldateB.localeCompare(fulldateA);
    }
 
    return fulldateA.localeCompare(fulldateB);
  })
  setdbFeedback(feedbackCopy);
};


  useEffect(getFeedbacks,[]);

  return (
    <div>
      <br></br>
    <h3 style={{textAlign:'center',fontFamily:'Inter', fontSize:'30px', color:'#0a4668'}}>Feedbacks</h3>
    <div className='table-responsive mt-1 mx-5' style={{paddingLeft: "4%",marginBottom:'100px',display:'flex',flexDirection:'row'}}>
    <table className='table table-striped' style={{width:'1000px',marginTop:'15px'}}>
      <thead>
        <tr className="table"  style={{backgroundColor: "#A2BFC8"}}>
        <th style={{backgroundColor:'#262626',color:'white',textAlign:'center', width:"150px",height:'50px'}} scope='col'>Feedback ID</th>
          <th style={{backgroundColor:'#262626',color:'white',textAlign:'center',width:"900px"}} scope='col'>Komenti</th> 
            <th style={{backgroundColor:'#262626',color:'white',textAlign:'center',width:"200px"}} scope='col'>Emri i Kompanisë</th> 
            <th style={{backgroundColor:'#262626',color:'white',textAlign:'center',width:"200px"}} scope='col'>Data</th> 
          <th style={{width:'200px',backgroundColor:'white'}}><Link to="/addFeedback" onClick={() => {window.location.href="/addFeedback"}}> <button>Shto një Koment</button></Link> </th>
          <th style={{width:'150px',backgroundColor:'white'}}> <button style={{fontFamily:'Inter',fontSize:'11px', width:'102px',textAlign:'center'}} onClick={sortByDate}>ASC↑/DSC↓</button></th>
        </tr>
      </thead>
      <tbody>
          {dbFeedback.map(dbFeedback => (
          <tr key={dbFeedback.id}>
         <td style={{backgroundColor:'#262626',color:'white',height:"50px"}}>{dbFeedback.id}</td>
         <td style={{backgroundColor:'#bfbfbf',fontfamily:'Inter',fontSize:'18px'}}>{dbFeedback.text}</td>
         <td style={{backgroundColor:'#bfbfbf',fontfamily:'Inter',fontSize:'18px'}}>{dbFeedback.companyName}</td>
         <td style={{backgroundColor:'#bfbfbf',fontfamily:'Inter',fontSize:'18px'}}>{moment.utc(dbFeedback.date).format('MM/DD/YY')}</td>
           
           <td style={{backgroundColor:'#bfbfbf'}}><Link style={{textDecoration:'none'}} to={`/editFeedback/${dbFeedback.id}`} className="btn btn-outline-secondary" onClick={() => {window.location.href=`/editFeedback/${dbFeedback.id}`}}><button>Edito</button></Link></td>
           <td style={{backgroundColor:'#bfbfbf'}}><button type="button" onClick={() => {if(window.confirm(`A jeni i sigurt qe doni te fshini Feedback-un? "${dbFeedback.id}"? `)) deleteFeedback(dbFeedback.id)}} className="btn btn-secondary">Fshij</button></td>
        </tr>   
          ))}
      </tbody>

    </table>
    <br></br>   <br></br>
    </div>
  </div>
  )

}
export default <Feedback />;

