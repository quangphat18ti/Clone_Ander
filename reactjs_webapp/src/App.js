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

  return (
    <>
      {/* TODO Change the code below to create the form. This form have field to fill the name, gitlab email, district, birth, git
          Expect: Can understand the form, and the action, htmlFor of label
      */}
      <div className="container">
        <form action="#">
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" placeholder="Enter email" id="email" />
          </div>

          {/*This is example code for alert button*/}
          <button type="submit" className="btn btn-primary" onClick={()=>{
            alert('Bạn vừa nhấn vào nút Submit')
          }}>Submit</button>
        </form>
      </div>
      {/*End TODO*/}

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
                  <div class="btn-group" role="group" aria-label="inline-btn">
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
    </>
  )
}

export default App
