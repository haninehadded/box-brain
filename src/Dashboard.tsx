import './index.css'

export const Dashboard = ({ onadd }) => {
  return (
    <>
      <h1 className="title">Brain Box</h1>

      <div className="box">

        <h2 className="text">Subjects</h2>
        <button className="btn" onClick={onadd}>Add Subject</button>
        <button className="btn2">Log out</button>

      </div>

    </>
  )
}



