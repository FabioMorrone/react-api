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

      <div className="container">
        <div className="row row-cols-1 g-3" >
          {
            posts.map((post, index) => (
              <div className="col p-3" key={index}>
                <div className="card d-flex flex-row">
                  <img className="img-container d-flex" src={`http://localhost:3003${post.image}`} alt={post.name} />
                  <div className="card-body">
                    <h3>{post.title}</h3>
                    <p className='fs-6'> {post.content}</p>
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
