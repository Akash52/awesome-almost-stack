import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
font-size : 4rem,
margin-left : 2rem;
position : relative;
z-index : 2;
background :  #dc2626;
transform : skew(-7deg);
a{
  color  : white;
  text-decoration : none; 
  text-transform : uppercase;
  padding : 0.5rem 1rem;
}
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 5px solid var(--black, #1f2937);
    display: grid;
    grid-template-columsn: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-templat-columns: 1fr auto;
    border-bottom: 3px solid var(--black, #1f2937);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
