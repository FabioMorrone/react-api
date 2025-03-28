import { useEffect, useState } from 'react'

const api_endpoint = 'http://localhost:3003/api/v1/posts'

function App() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetchData(api_endpoint)
  }, [])

  function fetchData() {
    console.log('you click');
    fetch(api_endpoint)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setPosts(data)
      })

  }

  return (


    <>

      <div className='container'>
        <h1>CIBO</h1>
        <div className='row row-cols-1' >

          {
            posts.map((post, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img className="card-img-top" src={`http://localhost:3003${post.image}`} alt={post.name} />
                  <div className="card-body">
                    <h3>{post.title}</h3>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>


    </>
  )
}

export default App
