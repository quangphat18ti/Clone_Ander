let member_list = [
  { 'index': '00', 'fullname': 'Nam G VU',  'gitlab email': 'namgivu@gmail.com',   'district': 10, 'birth': 1982, 'git': 'gitlab namgivu, github namgivu', },
  { 'index': '99', 'fullname': 'Han Ng VU', 'gitlab email': 'rubyhanvu@gmail.com', 'district': 3,  'birth': 2016, 'git': null, },
  { 'index': '01', 'fullname': 'Hung H VO', 'gitlab email': 'hoanghung1182003@gmail.com', 'district': 8, 'birth': 2003, 'git': 'gitlab HungBacktracking, github HungBacktracking'},
  { 'index': '02', 'fullname': 'Khuyen N TRA', 'gitlab email': 'kt7456158@gmail.com', 'district': 9,  'birth': 2002, 'git': 'gitlab Ktra-sssc, github Ktra-sssc', }
  //TODO dear member, please fill in your info here; keep fieldname col aligned, thanks
]

function App() {
  let member_lilist = member_list.map( m =>
    <li>{m.fullname} {m['gitlab email']}</li>
  )

  let member_lilist2_asjsonstr = member_list.map( m =>
    <li>{JSON.stringify(m)}</li>
  )

  return (
    <>
      <br/>the whole as json       <div>{JSON.stringify(member_list)}</div>

      <br/>li @ each field pickup  <ul>{member_lilist}</ul>

      <br/>li @ the whole as json  <ul>{member_lilist2_asjsonstr}</ul>

      <br/>TODO display as pure html table
      <br/>TODO display as bootstrap 4 table
    </>
  )
}

export default App
