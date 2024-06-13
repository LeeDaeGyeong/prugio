import styled from "styled-components";
import overviewImg from "../../images/overviewImg.jpg";

const OverViewPage = () => {
  return (
    <Wrapper>
      <OverviewTitle>OVERVIEW</OverviewTitle>
      <OverViewImg src={overviewImg} alt="overviewImg" />
      <TextBox>
        <Text>
          ※ 본 홈페이지의 CG, 일러스트, 이미지 등은 소비자의 이해를 돕기위한
          이미지컷으로 실제와 차이가 날 수 있습니다.
        </Text>
        <Text>
          ※ 본 홈페이지에 표기된 개발사업과 관련된 사항은 지자체 및 개발주체,
          관계기관의 사정에 따라 일부 변경, 지연, 취소될 수 있으며, 이는 당사와
          무관합니다.
        </Text>
        <Text>
          ※ 본 홈페이지에 표기된 내용은 부동산 관련 법령 및 정책에 따라 변동될
          수 있습니다.
        </Text>
        <Text>
          ※ 본 홈페이지는 제작 과정상 오탈자가 있을 수 있으니 자세한 사항은
          분양관계자에게 반드시 확인하시기 바랍니다.
        </Text>
      </TextBox>
    </Wrapper>
  );
};

export default OverViewPage;

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    padding: 10px;
  }
`;

const OverviewTitle = styled.h1`
  color: ${({ theme }) => theme.COLORS.brown};
  font-size: ${({ theme }) => theme.FONT_SIZE.extraLarge};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin: 40px;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
  }

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.FONT_SIZE.extraLarge};
  }
`;

const OverViewImg = styled.img`
  margin: 40px;
  width: 100%;
  max-width: 900px;
  height: auto;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    margin: 20px;
  }
`;

const TextBox = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 900px;
  text-align: left;
  background-color: ${({ theme }) => theme.COLORS.primary.gray};
  padding: 20px;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 100%;
    padding: 10px;
  }
`;

const Text = styled.p`
  margin-bottom: 24px;
  line-height: 1.5;
  color: #696969;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};

  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: ${({ theme }) => theme.FONT_SIZE.extraSmall};
  }
`;
