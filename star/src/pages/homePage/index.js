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
      <BannerContainer>
        <BannerTextBox>
          <BannerText1>새로운 중심, 빛나는 시작</BannerText1>
          <BannerText2>푸르지오 스타셀라49</BannerText2>
        </BannerTextBox>
        <BannerImg src={bannerImg} alt="bannerImg" />
      </BannerContainer>
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

  @media ${({ theme }) => theme.DEVICE.mobile} {
    flex-direction: column;
    padding: 20px;
  }
`;
const BannerContainer = styled.div`
  position: relative;
`;

const BannerTextBox = styled.div`
  position: absolute;
  top: 60px;
  left: 120px;
  text-align: left;
  line-height: 1.4;
  color: ${({ theme }) => theme.COLORS.white};
  z-index: 1;

  animation: ${fadeIn} 4s forwards;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    top: 60px;
    left: 30px;
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    top: 24px;
    left: 16px;
  }
`;

const BannerText1 = styled.p`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: 25px;
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: 18px;
  }
`;

const BannerText2 = styled.p`
  font-size: 80px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: 58px;
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: 32px;
  }
`;

const BannerImg = styled.img`
  width: 100%;
  max-width: 1700px;
  height: auto;
  margin-top: 40px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 100%;
    margin-top: 20px;
  }
`;

const MainImg = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin-top: 100px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 90%;
    margin-top: 20px;
  }
`;

const MainText1 = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-top: 100px;
  margin-left: 40px;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 90%;
    margin-top: 20px;
    margin-left: 0;
  }
`;

const MainText2 = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-top: 100px;
  margin-left: 40px;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 90%;
    margin-top: 20px;
    margin-left: 0;
  }
`;
