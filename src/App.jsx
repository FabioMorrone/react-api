import { useEffect, useState } from 'react'

const api_endpoint = 'http://localhost:3003/api/v1/posts'

function App() {
  const [post, setpost] = useState([])


  useEffect(() => {
    fetchData(api_endpoint)
  }, [])

  function fetchData() {
    console.log('you click');
    fetch(api_endpoint)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

  }

  return (


    <>

      <div className='container'>
        <h1>post</h1>
        <div>

          {
            post.map(posts => (
              <div>{post}</div>

            ))
          }
        </div>

      </div>


    </>
  )
}

export default App
