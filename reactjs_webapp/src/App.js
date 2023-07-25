let member_list = [
  { 'index': '00', 'fullname': 'Nam G VU',  'gitlab email': 'namgivu@gmail.com',   'district': 10, 'birth': 1982, 'git': 'gitlab namgivu, github namgivu', },
  { 'index': '99', 'fullname': 'Han Ng VU', 'gitlab email': 'rubyhanvu@gmail.com', 'district': 3,  'birth': 2016, 'git': null, },
  { 'index': '01', 'fullname': 'Hung H VO', 'gitlab email': 'hoanghung1182003@gmail.com', 'district': 8, 'birth': 2003, 'git': 'gitlab HungBacktracking, github HungBacktracking'},
  { 'index': '02', 'fullname': 'Khuyen N TRA', 'gitlab email': 'kt7456158@gmail.com', 'district': 9,  'birth': 2002, 'git': 'gitlab Ktra-sssc, github Ktra-sssc', },
  { 'index': '03', 'fullname': 'Hoang C TA', 'gitlab email': '21120074@student.hcmus.edu.vn', 'district': 2,  'birth': 2003, 'git': 'gitlab Heyesvz, github Heyesvz', },
  { 'index': '04', 'fullname': 'Tan P NGUYEN', 'gitlab email': 'phuctanhh@gmail.com', 'district': 'Thu duc',  'birth': 2003, 'git': 'gitlab phuctanhh', },
  { 'index': '05', 'fullname': 'Hieu T. NGUYEN', 'gitlab email': 'nguyentronghieu@hsgs.edu.vn', 'district': 'Thu Duc',  'birth': 2003, 'git': 'gitlab hieunguyen.cs, github hieunguyen.cs', },
  { 'index': '06', 'fullname': 'Ky Q PHAN', 'gitlab email' : '20120017@student.hcmus.edu.vn', 'district': 8, 'birth': 2002, 'git': 'gitlab phanquocky, github quocky', },
  { 'index': '07', 'fullname': 'Phat Q CAO','gitlab email': 'quangphat18ti@gmail.com', 'district': 8, 'birth': 2016, 'git': 'gitlab quangphat18ti, github quangphat18ti', }, 
  //TODO dear member, please fill in your info here; keep fieldname col aligned, thanks
]

function App() {
  let member_lilist = member_list.map( m =>
    <li>{m.fullname} {m['gitlab email']}</li>
  )

  let member_lilist2_asjsonstr = member_list.map( m =>
    <li>{JSON.stringify(m)}</li>
  )

  let member_tdlist = member_list.map(m => 
      <tr>
        <td>{m.index}</td>
        <td>{m.fullname}</td>
        <td>{m["gitlab email"]}</td>
        <td>{m.district}</td>
        <td>{m.birth}</td>
        <td>{m.git}</td>
      </tr>
  )
  return (
    <>
      <br/>the whole as json       <div>{JSON.stringify(member_list)}</div>

      <br/>li @ each field pickup  <ul>{member_lilist}</ul>

      <br/>li @ the whole as json  <ul>{member_lilist2_asjsonstr}</ul>

      <br/>TODO display as pure html table
      <br/>TODO display as bootstrap 4 table

      {/* TODO: The code below is a example of Bootstrap4 table, you modify it to render member_list */}
      <div class="container">
        <h2>Basic Table</h2>
        <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>            
        <table class="table">
          <thead>
            <tr>
              <th>index</th>
              <th>fullname</th>
              <th>gitlab email</th>
              <th>district</th>
              <th>birth</th>
              <th>git</th>
            </tr>
          </thead>
          <tbody>
            {member_tdlist}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
