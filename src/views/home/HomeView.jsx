import { useState } from 'react'
import Button from '~/components/commons/button/Button'

function HomeView() {
  const [count, setCount] = useState(0)

  return (
    <div className="prose w-full max-w-4xl flex-grow">
      <h1>Header</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <p>
        Lorem consectetur adipisicing elit. Illum quae labore, officiis commodi provident
        rem praesentium soluta tempore dolorem fugit explicabo ipsum quam nihil quis neque
        deserunt nulla? Similique, consectetur?
      </p>
      <Button onClick={() => setCount((prev) => prev + 1)} className="btn-primary">
        Presioname {count}!!
      </Button>
    </div>
  )
}

export default HomeView
