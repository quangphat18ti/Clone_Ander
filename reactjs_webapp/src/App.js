import {useState, useEffect} from "react"
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
  let [district, setDistrict] = useState(""); 
  let [birth, setBirth] = useState();
  let [git, setGit] = useState("");

  // Store member_list in localStorage with the key 'member_list', and update when member_list is changed
  useEffect(() => {
  localStorage.setItem('member_list', JSON.stringify(member_list));
}, [member_list]);

  return (
    <>
      {/* member @ upsert form */}
      <div className="container">
        <form action="#">
          <div className="form-group">
            <label htmlFor="fullName">Fullname:</label>
            <input type="text" className="form-control" placeholder="eg Ten Lot HO" id="fullName" value={fullName} onChange={(e)=> {
                setFullName(e.target.value);
              }}/>
          </div>

          <div className="form-group">
            <label htmlFor="gitlabEmail">Gitlab email:</label>
            <input type="email" className="form-control" placeholder="Enter your email used for gitlab" id="gitlabEmail" value={gitlabEmail} onChange={(e) => {
              setGitlabEmail(e.target.value);
            }} />
          </div>

          <div className="form-group">
            <label htmlFor="district">District:</label>
            <input type="text" className="form-control" placeholder="What is your district location in Saigon" id="district" value={district} onChange={(e) => {
              setDistrict(e.target.value);
            }}/>
          </div>

          <div className="form-group">
            <label htmlFor="birth">Birth:</label>
            <input type="number" className="form-control" placeholder="Enter your birth year" id="birth" value={birth} onChange={(e) => {
              setBirth(e.target.value);
            }}/>
          </div>

          <div className="form-group">
            <label htmlFor="git">Git:</label>
            <input type="text" className="form-control" placeholder="Enter your git info > gitlab namgivu, github namgivu" id="git" value={git} onChange={(e) => {
              setGit(e.target.value);
            }}/>
          </div>

          <button type="submit" className="btn btn-primary" onClick={()=>{
            //TODO add submit code here
            console.log(fullName, gitlabEmail, district, birth, git)
          }}>Submit</button>
        </form>
      </div>

      {/* member listing */}
      <div className="container">
        <h2>Intern Member List</h2>

        <table className="table">
          <thead>
            <tr>
              {col_header_list.map(h => <td key={`header-${h}`} >{h}</td> )}
              <td>action</td>
            </tr>
          </thead>

          <tbody>
            {member_list.map( (m,i) =>
              <tr key={`member-${i}`} >
                {/* value col(s) */}
                {col_header_list.map(h =>
                  <td key={`memberinfo-${i}-${h}`} >{m[h]}</td>
                )}

                {/* action col */}
                <td>
                  <div className="btn-group" role="group" aria-label="inline-btn">
                    <button type="button" className="btn btn-primary" onClick={ () => {
                      alert('Edit')
                    }}>Edit</button>

                    <button type="button" className="btn btn-danger" onClick={ () => {
                      alert('Delete')
                    }}>Delete</button>
                  </div>
                </td>

              </tr>
            )}
          </tbody>
        </table>

      </div>
      
      {/* download :member_list as json file */}
      <div className="container">
      <button onClick={() => {
        let blob = new Blob([localStorage.getItem('member_list')]);
        let href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = "member_list.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}>Download member list</button>
      </div>
    </>
  )
}

export default App
