const Dashboard = ({ removeToken }) => {
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={removeToken} className="btn btn-info">logout</button>
    </>
  );
};
export default Dashboard;
