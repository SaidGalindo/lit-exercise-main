import { css } from "lit-element";

export default css`
  h1 {
    font-size: 1.2rem;
  }

  .characters-grid{
    display: flex;
    flex-wrap: wrap
  }

  *{
    background-color: white;
    padding: 10px 20px

  }


  @media screen and (max-width: 600px) {
    .characters-grid{
  
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr)); 
      gap: 20px; 
    }
}



`