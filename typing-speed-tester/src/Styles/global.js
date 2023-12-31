
import {createGlobalStyle} from 'styled-components';
export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    background: black ;
    color:white;
    margin:0;
    padding:0;
    transition:all 0.25s linear;
}
.canvas{
    display:grid;
    min-height:100vh;
    grid-auto-flow:row;
    grid-template-row:auto 1fr auto;
    gap : 0.5rem;
    padding:2rem;
    width:100vw;
    align-items:center;
    text-align:center;
}

.type-box{
    display:block;
    max-width:1000px;
    height:140px;
    margin-left:auto;
    margin-right:auto;
    overflow:hidden;
}

.words{
    font-size:32px;
    display:flex;
    flex-wrap:wrap;
    color:white;
}

.word{
    margin:5px;
    padding:right 2px;
}
.hidden-input{
    opacity:0;

}
.current{
    border-left:1px solid ;
    animation: blinking 2s infinite;
   animation-timing-function:ease;

@keyframes blinking{
    0% {border-left-color:white;}
    25% {border-left-color:black;}
    50% {border-left-color:white;}
    75% {border-left-color:black;}
    100% {border-left-color:white;}
    }
}

.correct{
    color:green;
}
.incorrect{
    color:red;
}


.current-right{
    border-right: 1px solid ;
    animation: blinkingRight 2s infinite ;
   animation-timing-function: ease ;


   @keyframes blinkingRight{
    0% {border-right-color: white;}
    25% {border-right-color: black;}
    50% {border-right-color: white;}
    75% {border-right-color: black;}
    100% {border-right-color: white;}
    }
}

.upper-menu{
    display:flex;
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    font-size:1.5rem;
    justify-content:space-between;
    
}
.modes{
    display:flex;
    gap:1rem;
}
.test-mode:hover{
    color:green;
    cursor:pointer;
}

.footer{
    width:1000px;
    display:flex;
    justify-content:space-between;
    margin-left:auto;
    margin-right:auto;
}

.stats{

    width:50%
    padding:50px;
}
.title{
    font-size: 50px;
    margin:auto;
    color: pink;
}
.subtitle{
    font-size:35px;
    margin:auto;
    color:yellow;
}
.header{
    width:100%;
    display:flex;
    justify-content:space-between;
     margin-left:auto;
    margin-right:auto;
}

.info{
    margin-top:1rem;
    font-size: 1.5rem;
}
.center-screen{
    margin-top:20%;
    display:flex;
    justify-content: center;
    align-items:center;
}

.logo {
    cursor:pointer;
    font-size: 35px;
    font-style:italic;
    font-weight: bold;
    font-family: Cursive,Brush Script MT ;
    color: indigo;
    background-color: #f0f0f0; 
    padding: 10px 10px; 
    border-radius: 5px; 
    text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.3); 
    animation: logo 3s infinite;
    margin-top:-0.5rem;
    @keyframes logo {
        0% {
          text-shadow: 0 0 10px #007bff; /* Start with a light glow */
        }
        50% {
          text-shadow: 0 0 20px #007bff; /* Increase the glow */
        }
        100% {
          text-shadow: 0 0 10px #007bff; /* Go back to the initial glow */
        }
      }
  }

  .footer-icon{
    margin-left:5%;
  }
  
`