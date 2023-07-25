import {useState} from "react"
let member_list = [
  { 'index': '00', 'fullname': 'Nam G VU',        'gitlab email': 'namgivu@gmail.com',              'district': 10,         'birth': 1982, 'git': 'gitlab namgivu, github namgivu', },
  { 'index': '01', 'fullname': 'Hung H VO',       'gitlab email': 'hoanghung1182003@gmail.com',     'district': 8,          'birth': 2003, 'git': 'gitlab HungBacktracking, github HungBacktracking'},
  { 'index': '02', 'fullname': 'Khuyen N TRA',    'gitlab email': 'kt7456158@gmail.com',            'district': 9,          'birth': 2002, 'git': 'gitlab Ktra-sssc, github Ktra-sssc', },
  { 'index': '03', 'fullname': 'Hoang C TA',      'gitlab email': '21120074@student.hcmus.edu.vn',  'district': 2,          'birth': 2003, 'git': 'gitlab Heyesvz, github Heyesvz', },
  { 'index': '04', 'fullname': 'Tan P NGUYEN',    'gitlab email': 'phuctanhh@gmail.com',            'district': 'Thu duc',  'birth': 2003, 'git': 'gitlab phuctanhh', },
  { 'index': '05', 'fullname': 'Hieu T. NGUYEN',  'gitlab email': 'nguyentronghieu@hsgs.edu.vn',    'district': 'Thu Duc',  'birth': 2003, 'git': 'gitlab hieunguyen.cs, github hieunguyen.cs', },
  { 'index': '06', 'fullname': 'Ky Q PHAN',       'gitlab email': '20120017@student.hcmus.edu.vn',  'district': 8,          'birth': 2002, 'git': 'gitlab phanquocky, github quocky', },
  { 'index': '07', 'fullname': 'Phat Q CAO',      'gitlab email': 'quangphat18ti@gmail.com',        'district': 8,          'birth': 2016, 'git': 'gitlab quangphat18ti, github quangphat18ti', },
]

function App() {
  let col_header_list = Object.keys(member_list[0])

  //state variables
  let [fullName, setFullName] = useState("");
  let [gitlabEmail, setGitlabEmail] = useState("");
  let [district, setDistrict] = useState(null); 
  let [birth, setBirth] = useState(null);
  let [git, setGit] = useState("");

  return (
    <>
      {/* TODO Change the code below to create the form. This form have field to fill the name, gitlab email, district, birth, git
          Expect: Can understand the form, and the action, htmlFor of label
      */}
      <div className="container">
        <form action="#">
          <div className="form-group">
            <label htmlFor="fullName">Fullname:</label>
            <input type="text" className="form-control" placeholder="Enter fullname" id="fullName" value={fullName} onChange={(e)=> {
                setFullName(e.target.value);
              }}/>
          </div>

          <div className="form-group">
            <label htmlFor="gitlabEmail">Gitlab email:</label>
            <input type="email" className="form-control" placeholder="Enter Gitlab email" id="gitlabEmail" value={gitlabEmail} onChange={(e) => {
              setGitlabEmail(e.target.value);
            }} />
          </div>

          <div className="form-group">
            <label htmlFor="district">District:</label>
            <input type="number" className="form-control" placeholder="Enter district" id="district" value={district} onChange={(e) => {
              setDistrict(e.target.value);
            }}/>
          </div>

          <div className="form-group">
            <label htmlFor="birth">Birth:</label>
            <input type="number" className="form-control" placeholder="Enter birth" id="birth" value={birth} onChange={(e) => {
              setBirth(e.target.value);
            }}/>
          </div>

          <div className="form-group">
            <label htmlFor="git">Git:</label>
            <input type="text" className="form-control" placeholder="Enter git information" id="git" value={git} onChange={(e) => {
              setGit(e.target.value);
            }}/>
          </div>
          {/*This is example code for alert button*/}
          <button type="submit" className="btn btn-primary" onClick={()=>{
            
            console.log(fullName, gitlabEmail, district, birth, git);
          }}>Submit</button>
        </form>
      </div>
      {/*End TODO*/}

      <div className="container">
        <h2>Intern Member List</h2>

        <table className="table">
          <thead>
            <tr>
              {col_header_list.map(h => <td>{h}</td> )}
            </tr>
          </thead>

          <tbody>
            {member_list.map(m =>
              <tr>
                {col_header_list.map(h =>
                  <td>{m[h]}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default App
