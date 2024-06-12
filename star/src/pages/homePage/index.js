import styled, { keyframes } from "styled-components";
import bannerImg from "../../images/bannerImg.jpg";
import mainImg1 from "../../images/mainImg1.jpg";
import mainText1 from "../../images/mainText1.jpg";
import mainImg2 from "../../images/mainImg2.jpg";
import mainText2 from "../../images/mainText2.jpg";
import { flexCenter } from "../../styles/common.style";

const HomePage = () => {
  return (
    <Wrapper>
      <BannerImg src={bannerImg} alt="bannerImg" />
      <Box>
        <MainImg src={mainImg1} alt="mainImg1" />
        <MainText1 src={mainText1} alt="mainText1" />
      </Box>
      <Box>
        <MainText2 src={mainText2} alt="mainText2" />
        <MainImg src={mainImg2} alt="mainImg2" />
      </Box>
    </Wrapper>
  );
};

export default HomePage;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.primary.basic};
  text-align: center;
`;

const Box = styled.div`
  ${flexCenter}
  padding: 100px;
`;

const BannerImg = styled.img`
  width: 1600px;
  height: auto;
  margin-top: 40px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
`;

const MainImg = styled.img`
  width: 800px;
  height: auto;
  margin-top: 100px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const MainText1 = styled.img`
  width: 400px;
  height: auto;
  margin-top: 100px;
  margin-left: 40px;
`;

const MainText2 = styled.img`
  width: 500px;
  height: auto;
  margin-top: 100px;
  margin-left: 40px;
`;
