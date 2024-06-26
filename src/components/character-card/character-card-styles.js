import { css } from "lit-element";

export default css`


button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.character-photo{
    height:200px; 
            border-radius: 10px 10px 0px 0px; 
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
}

.character-photo > button{
     
   padding-left: 10px;
   padding-top: 10px
}

.character-card{
    /* width: 100%; */
    width: 250px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 10px
}

.card-data{
    display: grid;
    padding: 20px 10px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    
}

.dato{
    margin-top: 0.5rem;
    
}

.dato > .subtitulo{
    color: gray
    
}

.dato > .info{
    display: block
}

@media screen and (max-width: 600px) {
  
.character-card{
    width: 100%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 10px
}
}


`