export default function App()
{
  return(
    <div className="app">
    <Logo/>
    <Form/>
    <PackinList/>
    <Stats/>
    </div>
  )

}
function Logo()
{
  return(
  <h1>🧳FAR AWAY💼</h1>
)
}
function Form()
{
  return(
<div className="add-form">
 <h3>What do you need for trip? </h3>
</div>
  )
}
function PackinList()
{
  return(
  <div className="list">List</div>
  )
}
function Stats()
{
return(
  <footer className="stats">
    <em>You have X items on your list and you already have Packed X (x%)</em>
  </footer>
)
}
