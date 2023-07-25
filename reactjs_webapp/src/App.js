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
  let headers = Object.keys(member_list[0])

  let member_tr_list = member_list.map(m =>
    <tr>
      {headers.map( h => <td>{m[h]}</td> )}
    </tr>
  )

  let member_list_table_header = 
    <thead>
      <tr>
      {Object.keys(member_list[0]).map(key => <th>{key}</th>)}
      </tr>
    </thead>
  let member_list_table_body = 
    <tbody>
    {member_list.map(item => {
    return (
      <tr>
        {Object.values(item).map(value => <td>{value}</td>)}
      </tr>
      )
    })}
    </tbody>
  
  return (
    <>
      <div className="container">
        <h2>Intern Member List</h2>

        <table className="table">
          {member_list_table_header}
          {member_list_table_body}      
        </table>

      </div>
    </>
  )
}

export default App
