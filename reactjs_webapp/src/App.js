import {useState, useEffect, useRef} from "react"
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

  //state variables for modal
  let [fullnameModal, setFullnameModal] = useState("");
  let [gitlabEmailModal, setGitlabEmailModal] = useState("");
  let [districtModal, setDistrictModal] = useState(""); 

  let key_list = Object.keys(member_list[0])

  // Store member_list in localStorage with the key 'member_list', and update when member_list is changed
  useEffect(() => {
    localStorage.setItem('member_list', JSON.stringify(member_list))
  }, [member_list])

  const formRef = useRef();

  let [updIndex, setUpdIndex] = useState(null)

  return (
    <>
      <div className="container">
        {/* member @ upsert form */}
        <div className='row mt-5'>
          <div className='col-6'>
            <form action="#" ref={formRef}>
              <div className="form-group row">
                <label htmlFor="fullName" className="col-sm-3 col-form-label">Fullname</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" placeholder="eg Ten Lot HO" id="fullName" value={fullname} 
                    required
                    onChange={(e)=> {
                      setFullname(e.target.value);
                    }}/>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="gitlabEmail" className="col-sm-3 col-form-label">Gitlab email</label>
                <div className="col-sm-9">
                  <input type="email" className="form-control" placeholder="Enter your email used for gitlab" id="gitlabEmail" value={gitlabEmail} 
                    required
                    onChange={(e) => {
                    setGitlabEmail(e.target.value);
                  }} />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="district" className="col-sm-3 col-form-label">District</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" placeholder="What is your district location in Saigon" id="district" value={district} 
                    required
                    onChange={(e) => {
                    setDistrict(e.target.value);
                  }}/>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="birth" className="col-sm-3 col-form-label">Birth</label>
                <div className="col-sm-9">
                  <input type="number" className="form-control" placeholder="Enter your birth year" id="birth" value={birth} 
                    required
                    onChange={(e) => {
                      setBirth(e.target.value);
                  }}/>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="git" className="col-sm-3 col-form-label">Git</label>
                <div className="col-sm-9">
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
                  const form = formRef.current;
                  if (!form.checkValidity()) { return }

                  let member_list_new = [
                    {fullname, "gitlab email": gitlabEmail, district, birth, git},  // we want to add to the top --> rendered at top of the table
                    ...member_list
                  ] ; set__member_list(member_list_new)
                }}
              >Submit</button>
            </form>
          </div>
        </div>
        
        
        <div className="container mt-5">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#upsertModal" onClick={()=>{
            setUpdIndex(null)
          }}>Create New</button>      
          {/*Modal*/}
          <div className="modal" tabindex="-1" id="upsertModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/*Modal header*/}
                <div className="modal-header">
                  {
                    (updIndex === null) ?
                      <h5 className="modal-title">Create new member</h5> :
                      <h5 className="modal-title">Update member</h5>
                  }
                  
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                {/*
                  TODO change the code to display the form above and show the form
                  expect: understand bs4 modal, and state management
                */}
                {/*Modal body*/}
                <div className="modal-body">
                  <form action="#">
                    <div className="form-group row">
                      <label htmlFor="fullName" className="col-sm-3 col-form-label">Fullname</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="eg Ten Lot HO" id="fullNameModal" value={fullnameModal} 
                          required
                          onChange={(e)=> {
                            setFullnameModal(e.target.value);
                          }}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label htmlFor="gitlabEmail" className="col-sm-3 col-form-label">Gitlab email</label>
                      <div className="col-sm-9">
                        <input type="email" className="form-control" placeholder="Enter your email used for gitlab" id="gitlabEmailModal" value={gitlabEmailModal} 
                          required
                          onChange={(e) => {
                            setGitlabEmailModal(e.target.value);
                          }}/>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label htmlFor="district" className="col-sm-3 col-form-label">District</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="What is your district location in Saigon" id="districtModal" value={districtModal} 
                          required
                          onChange={(e) => {
                            setDistrictModal(e.target.value);
                          }}/>
                      </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="birth" className="col-sm-3 col-form-label">Birth</label>
                        <div className="col-sm-9">
                        <input type="number" className="form-control" placeholder="Enter your birth year" id="birth" value={birth} 
                            required
                            onChange={(e) => {
                            setBirth(e.target.value);
                        }}/>
                        </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="git" className="col-sm-3 col-form-label">Git</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="Enter your git info > gitlab namgivu, github namgivu" id="git" value={git} 
                          required
                          onChange={(e) => {
                          setGit(e.target.value);
                        }}/>
                        </div>
                    </div>
                  </form>
                </div>

                {/*Modal footer*/}
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{
                    let member_new = {
                      "fullname"      : fullnameModal,
                      "gitlab email"  : gitlabEmailModal,
                      "district"      : districtModal,
                    }
                    let member_current = member_list[updIndex]

                    let member_list_new
                    if (updIndex) {  // is updating
                      member_list_new = [...member_list]
                      member_list_new[updIndex] = {
                        ...member_current,
                        ...member_new,
                      }

                      setUpdIndex(null)  //FIXME @Ky we dont set it null here; instead, will set null @onClick Create New, and set =i @onClick row's edit
                    } else {  // is adding new
                      member_list_new = [member_new, ...member_list]
                    }
                    set__member_list(member_list_new)
                  }}>Save changes</button>
                </div>
              </div>
            </div>
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
          <h3>Intern Member List</h3>

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
                        style={{ "minWidth": "5rem" }} type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#upsertModal"
                        onClick={ () => {
                          // get all <input> values of this clicked row, and set it to the upsert form fields
                          setFullnameModal    (member_list[i].fullname)
                          setGitlabEmailModal (member_list[i]['gitlab email'])
                          setDistrictModal    (member_list[i].district)
                          setBirth            (member_list[i].birth)
                          setGit              (member_list[i].git)
                          setUpdIndex         (i)
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

        {/* member listing @ markdown table */}
        <div className='row mt-0'>
          <h3>Intern Member List @ markdown table </h3>

          <br/>
          <div className="container p-0">
            <pre>{ (() => {
              //region find colwidth to call .padEnd() for each col
              let colwidth_list__header  = key_list.map( k => k.length )
              let colwidth_list__horizon = colwidth_list__header  // horizonLine colwidth defined by header colwidth
              let colwidth_list__member  = member_list.map( m =>
                key_list.map( k => (m[k]+'').length )
              )

              // shortcut var
              let peh  = colwidth_list__header  // peh aka padEnd_for_header_line
              let pehz = peh                    // peh aka padEnd_for_horizon_line
              let pem  = colwidth_list__member  // peh aka padEnd_for_member_lines

              // find max width for each col
              let pem_transposed = pem[0].map((_, colIndex) => pem.map(row => row[colIndex]))  // transpose 2-dimension list ref. https://stackoverflow.com/a/17428705/248616
              let pe = key_list.map( (_,i) => Math.max(...pem_transposed[i], peh[i]) )
              //endregion find width to call .padEnd() for each col

              var s=key_list.map( (k,i) =>  k.padEnd(pe[i])     ).join(' | ') ; const header_line  = `| ${s} |`
              var s=key_list.map( (_,i) => ''.padEnd(pe[i],'-') ).join(' | ') ; const horizon_line = `| ${s} |`

              const memberLine_list = member_list.map((m) => {
                let s = key_list.map( (k,i) => (m[k]+'').padEnd(pe[i]) ).join(' | ')
                return `| ${s} |`
              })

              let md_text = [
                header_line,
                horizon_line,
                ...memberLine_list,
              ].join('\n')

              return md_text
            })() }</pre>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
