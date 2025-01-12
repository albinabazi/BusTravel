import React , {useState} from 'react'
import { Link } from 'react-router-dom'

const FeedbackPage = () => {
  const [formData, setFormData] = useState(null);

  const handleTextChange = (e => {
    setFormData({
      ...formData,
      text: e.target.value
    });
  });

  const handleCompanyNameChange = (e => {
    setFormData({
      ...formData,
      companyName: e.target.value
    });
  });

  const handleSubmit = (e => {
    e.preventDefault();

    const FeedbackToAdd = {
     
      text: formData.text,
      companyName: formData.companyName,
     
    };

    const url = `http://localhost:8085/feedback`;
        
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FeedbackToAdd)
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
    })
    .catch(error => {
      console.log(error);
    });

    alert('Feedback u shtua me sukses!');
    {window.location.href="/allfeedbacks/#feedbacks"}

  }
  )


  return(
    <div className="addComp mt-4" style={{marginLeft:'5%', display:'flex', alignItems:'center',justifyContent:'center'}}>
        <form className="w-100 px-5" action="">
        <h1 style={{fontSize:'30px',color:'#003366', height: "115px", fontStyle:"italic"}}>Shkruaj komente për eksperiencën tuaj!</h1>
      <br></br>

      <div className="">
            <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Emri i Kompanisë</label>
            <input style={{height:"50px"}} name="teksti" id="feedbacktext" type="text" className="form-control" onChange={handleCompanyNameChange}/>
          </div>
     
          <div className="mt-5">
            <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Komenti</label>
            <input style={{height:"200px", maxWidth:"1000px"}} name="teksti" id="feedbacktext" type="text" className="form-control" onChange={handleTextChange}/>
          </div>

   
    
          <br></br>
            <button style={{ width:"200px"}} onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5" id="user_companysubmit">Posto Komentin</button>
            <br>
            </br><Link  style={{textDecoration:'none'}}to="/allfeedbacks" onClick={() => {window.location.href="/allfeedbacks"}} className="btn btn-secondary btn-lg w-100 mt-3 mb-5">Kthehu mbrapa</Link>
          
    
          </form>
          <img src="./images/f2.png" alt="foto" width={"500"} height={"480"} style={{marginLeft:'260px'}} />
      </div>
      )
}

export default <FeedbackPage />;