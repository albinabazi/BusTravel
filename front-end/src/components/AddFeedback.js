import React , {useState} from 'react'
import { Link } from 'react-router-dom'

 const AddFeedback = () => {

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

  const handleDateChange = (e => {
    setFormData({
      ...formData,
      date: e.target.value
    });
  });


  const handleSubmit = (e => {
    e.preventDefault();

    const FeedbackToAdd = {
     
     
      text: formData.text,
      companyName:formData.companyName,
      date:formData.date
    };
    
  
    const url = `https://localhost:3000/api/feedback`; 
        
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
        {window.location.href="/feedback"}
  
      }
  
    );

  return(
    <div className="addComp mb-5" style={{marginRight: "20%", paddingLeft: "18%", display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <form className="w-100 px-5" action="">
        <h1 className="mt-5" style={{color:'#0a4668',paddingLeft:'27%'}}>Shto Feedback të re:</h1>
    <br></br>
    
        <div className="mt-5">
            <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Teksti</label>
            <input name="teksti" id="feedbacktext" type="text" className="form-control" onChange={handleTextChange}/>
        </div>


        <div className="mt-5">
            <label className="h3 form-label" style={{color:'#0a4668',fontFamily:'Inter'}}>Emri e Kompanisë</label>
            <input name="companyid" id="company_id" className="form-control" onChange={handleCompanyNameChange}/>
        </div>

        <br></br>
            <button style={{alignItems:'center', justifyContent:'center'}} onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5" id="user_companysubmit">Shto</button>
            <br>
            </br><Link  style={{textDecoration:'none', alignItems:'center', justifyContent:'center'}}to="/feedback" onClick={() => {window.location.href="/feedback"}} className="btn btn-secondary btn-lg w-100 mt-3">Kthehu mbrapa</Link>
        

        </form>
        <img src="./images/add.png" alt="foto" width={"180"} height={"250"} style={{marginLeft:'150px'}} />
    </div> 
  )
  
}
export default <AddFeedback/>;