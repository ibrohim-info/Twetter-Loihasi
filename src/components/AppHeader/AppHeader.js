import './AppHeader.css'
const AppHeader = ({liked, allPosts}) => {
  return(
    <div className="app-header d-flex">
      <h1>Abdulloh Ahnazarov</h1>
      <h2> {allPosts} like {liked}</h2>
    </div>
  )
}

export default AppHeader