import {useState, useEffect} from "react"
let member_list_init = [
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
  let col_header_list = Object.keys(member_list_init[0])

  //state variables
  let [fullname, setFullname] = useState("");
  let [gitlabEmail, setGitlabEmail] = useState("");
  let [district, setDistrict] = useState(""); 
  let [birth, setBirth] = useState();
  let [git, setGit] = useState("");
  let [member_list, set__member_list] = useState(member_list_init)

  // Store member_list in localStorage with the key 'member_list', and update when member_list is changed
  useEffect(() => {
    localStorage.setItem('member_list', JSON.stringify(member_list))
  }, [member_list])

  return (
    <>
      <div className="container">
        {/* member @ upsert form */}
        <div className='row mt-5'>
          <div className='col-6'>
            <form action="#">
              <div className="form-group row">
                <label htmlFor="fullName" className="col-sm-3 col-form-label">Fullname</label>
                <div class="col-sm-9">
                  <input type="text" className="form-control" placeholder="eg Ten Lot HO" id="fullName" value={fullname} 
                    required
                    onChange={(e)=> {
                      setFullname(e.target.value);
                    }}/>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="gitlabEmail" className="col-sm-3 col-form-label">Gitlab email</label>
                <div class="col-sm-9">
                  <input type="email" className="form-control" placeholder="Enter your email used for gitlab" id="gitlabEmail" value={gitlabEmail} 
                    required
                    onChange={(e) => {
                    setGitlabEmail(e.target.value);
                  }} />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="district" className="col-sm-3 col-form-label">District</label>
                <div class="col-sm-9">
                  <input type="text" className="form-control" placeholder="What is your district location in Saigon" id="district" value={district} 
                    required
                    onChange={(e) => {
                    setDistrict(e.target.value);
                  }}/>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="birth" className="col-sm-3 col-form-label">Birth</label>
                <div class="col-sm-9">
                  <input type="number" className="form-control" placeholder="Enter your birth year" id="birth" value={birth} 
                    required
                    onChange={(e) => {
                      setBirth(e.target.value);
                  }}/>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="git" className="col-sm-3 col-form-label">Git</label>
                <div class="col-sm-9">
                  <input type="text" className="form-control" placeholder="Enter your git info > gitlab namgivu, github namgivu" id="git" value={git} 
                    required
                    onChange={(e) => {
                    setGit(e.target.value);
                  }}/>
                  </div>
              </div>

              <button
                type="submit" className="btn btn-primary"
                onClick={()=>{
                  console.log(fullname, gitlabEmail, district, birth, git)

                  let member_list_new = [
                    {fullname, gitlabEmail, district, birth, git},  // we want to add to the top --> rendered at top of the table
                    ...member_list
                  ] ; set__member_list(member_list_new)
                }}
              >Submit</button>

            </form>
          </div>
        </div>

        {/* download :member_list as json file */}
        <div className='row mt-5'>
          <a href="#" className="text-primary"
             onClick={() => {
              // create url for :member_list in localstorage
              let blob = new Blob([localStorage.getItem('member_list')])
              let href = URL.createObjectURL(blob)

              // create <a> elem to click
              const a_elem    = document.createElement('a')
              a_elem.href     = href
              a_elem.download = "member_list.json"

              // click it to start the download
              document.body.appendChild(a_elem)
              a_elem.click()
              document.body.removeChild(a_elem)
            }}
          >
            Download member list
          </a>
        </div>

        {/* member listing */}
        <div className='row mt-0'>
          <h2>Intern Member List</h2>

          <table className="table table-striped">
            <thead>
              <tr>
                <td>row#</td>
                {col_header_list.map(h => <td key={`header-${h}`} >{h}</td> )}
                <td>action</td>
              </tr>
            </thead>

            <tbody>
              {member_list.map( (m,i) =>
                <tr key={`member-${i}`} >
                  {/* row# col */}
                  <td>{(i+'').padStart(2, '0')}</td>

                  {/* value col(s) */}
                  {col_header_list.map(h =>
                    <td key={`memberinfo-${i}-${h}`} >{m[h]}</td>
                  )}

                  {/* action col */}
                  <td>
                    <div className="btn-group" role="group" aria-label="inline-btn">
                      <button
                        style={{ "minWidth": "5rem" }} type="button" className="btn btn-outline-primary"
                        onClick={ () => {
                          // get all <input> values of this clicked row, and set it to the upsert form fields
                          setFullname   (member_list[i].fullname)
                          setGitlabEmail(member_list[i]['gitlab email'])
                          setDistrict   (member_list[i].district)
                          setBirth      (member_list[i].birth)
                          setGit        (member_list[i].git)
                        }}
                      >Edit</button>
                      
                      <button
                        style={{ "minWidth": "5rem" }} type="button" className="btn btn-outline-danger ml-3"
                        onClick={ () => {
                          // delete member in :memberlist at this clicked row at index :i  ref. https://stackoverflow.com/questions/52348143/how-can-i-remove-an-array-element-by-index-using-javascript#comment135347015_52348198
                          let sublist_0toi          = member_list.slice(0,i)
                          let sublist_iplus1ToEnd   = member_list.slice(i+1)
                          let member_list__afterdel = [...sublist_0toi, ...sublist_iplus1ToEnd]
                          set__member_list(member_list__afterdel)
                        }}
                      >Delete</button>

                    </div>
                  </td>

                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
      
    </>
  )
}

export default App
