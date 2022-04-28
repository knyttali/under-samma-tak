const SnakeContainer = () => {
    return (
      <div className="snake">
      <h1>Så här fungerar det</h1>
      <div className="d-flex snakeboxes row mb-4 pb-5">
      <div className="snakebox snakebox-left col-3">
          <h2>1. Du ansöker</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque assumenda modi ad ipsum. Officiis, animi.</p>
      </div>
  
      <div className="col-1"></div>
  
      <div className="snakebox col-3" >
          <h2>2. Vi säkerställer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui quam ullam!</p>
      </div>
  
      <div className="col-1"></div>
  
      <div className="snakebox snakebox-right col-3">
          <h2>3. Kommunen kontaktar dig</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in!</p>
      </div>
  </div>
  </div>
    )
  }
  
  export default SnakeContainer