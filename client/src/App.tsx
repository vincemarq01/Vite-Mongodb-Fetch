import { useState, useEffect } from 'react'
import './App.css'

interface Customers{
  id: number;
  name: string;
  age: string;
  email: string;
}

function App() {

  const [data1, setData] = useState<Customers[]>([])
  
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const response = await fetch('/api');
        const responseData = await response.json();
        setData(responseData);
 
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchMyAPI();
 
// const fetchPosts = async () =>{
//   const response = await fetch("/api");
//   const responseData = await response.json()
//   setData(responseData);
  


// };
// fetchPosts();

  }, []);
  console.log(data1)

  return (

<>
  <div>

     {data1.map((customer:Customers) => (
        <div key={customer.id}>
          <p>ID: {customer.id}</p>
          <p>name: {customer.name}</p>
          <p>age: {customer.age}</p>
          <p>email: {customer.email}</p>
        </div>
      ))}

    </div>
    </>
  )
}

export default App
