import styled from 'styled-components';
import FeaturePic from '../../homePage/homeImages/food1.jpg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 350vh;
  max-height: 600px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #D7D7D7;
  text-align: center;
  padding: 3 3rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    color: #A3EBB1;
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

