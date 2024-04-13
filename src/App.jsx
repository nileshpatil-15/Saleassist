import Dashboard from "./Page/Dashboard"

 function App() {
// const [data,setdatat]=useState([])
  
// async function fetdata(){
// try{
  
//   const response=await fetch('https://5a44d073-1bc7-4f5f-945f-08d77628416c.mock.pstmn.io/bag-images')
//  cdata=await response.json()
//  setdatat(data)
// }catch(err){
//   console.log(err)
// }
// }
// fetdata()

//   return (
//     <div className='App'>
//       <h1>Hello React.</h1>
//       {data?.map(item=><li key={item.image}>{item?.title}</li>)}
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// } 

// // Log to consol

return(
  < div className="flex justify-center">
  <Dashboard/>
  </div>
)
 }
export default App