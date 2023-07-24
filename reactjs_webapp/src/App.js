let member_list = [
  { 'index': '00', 'fullname': 'Nam G VU',  'gitlab email': 'namgivu@gmail.com',   'district': 10, 'birth': 1982, 'git': 'gitlab namgivu, github namgivu', },
  { 'index': '99', 'fullname': 'Han Ng VU', 'gitlab email': 'rubyhanvu@gmail.com', 'district': 3,  'birth': 2016, 'git': null, },
  //TODO dear member, please fill in your info here; keep fieldname col aligned, thanks
]

function App() {
  return (
    <>
      <div>{JSON.stringify(member_list)}</div>
    </>
  );
}

export default App
