import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
    @media ${devices.mobileSS}{
      font-size: 20%;
    }
    @media ${devices.mobileS}{
      font-size: 35%;
    }
    @media ${devices.mobileM}{
      font-size: 42%;
    }
    @media ${devices.mobileL}{
      font-size: 45%;
    }
    @media ${devices.tablet}{
      font-size: 48%;
    }
    @media ${devices.laptop}{
      font-size: 50%;
    }
    @media ${devices.laptopL}{
      font-size: 55%;
    }
    @media ${devices.desktop}{
      font-size: 65%;
    }
    @media ${devices.landscapeMobileSS}{
      font-size: 18%;
    }
    @media ${devices.landscapeMobileS}{
      font-size: 24%;
    }
    @media ${devices.landscapeMobileL}{
      font-size: 32%;
    }
    @media ${devices.desktop4K}{
      font-size: 110%;
    }
}
body{
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
    font-family: 'Montserrat', sans-serif;
  }
  #root{
    background: ${({ theme }) => theme.colors.dark}
  }
header{
    height: 10vh;
    width: 100%;
    nav{
      transition: all 600ms ease;
    }
}
main{
    position: relative;
    height: 85vh;
    width: 100vw;
    margin: auto;
}
footer{
  height: 5vh;
  width: 100%;
}
.App{
  transition: all 200ms ease;
  overflow: hidden;
}
.app-active{
  margin-left: 15%;
  nav{
    margin: 0;
    width: 75%;
    margin-left: auto;
  }
  @media ${devices.landscapeMobileS}{
    margin-left: 18.5%;
  }
}

h1 {
  font-size: 4.2rem;
  letter-spacing: 0.175rem;
  font-weight: 500;
}
h2 {
  font-size: 2.6rem;
  letter-spacing: 0.15rem;
  font-weight: 500;
}
h3 {
  font-size: 2.4rem;
  letter-spacing: 0.125rem;
  font-weight: 600;
}
h1{
  font-family: 'Permanent Marker', cursive;
}
p,
button,
select,
input,
textarea,
label,
div,
li,
a {
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.light};
}
button{
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
