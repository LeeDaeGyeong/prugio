import styled from "styled-components";
import whiteLogo from "../images/whiteLogo.jpg";

const Footer = () => {
  return (
    <Wrapper>
      <LogoImg src={whiteLogo} alt="whiteLogo" />
      <Text>
        법인명 : ㈜ 대우건설 | 주소 : 서울특별시 중구 을지로 170 |
        사업자등록번호 : 104-81-58180
        <br />
        온라인대행 : ㈜넥스미디어 ㅣ 주소 : 경기도 성남시 분당구 미금일로90번길
        32, 웰파크 3층 ㅣ 사업자등록번호 : 462-81-00186
      </Text>
      <Text>
        ※ 본 홈페이지의 CG, 일러스트, 이미지 등은 소비자의 이해를 돕기위한
        이미지컷으로 실제와 차이가 날 수 있습니다.
        <br />
        ※ 본 홈페이지에 표기된 개발사업과 관련된 사항은 지자체 및 개발주체,
        관계기관의 사정에 따라 일부 변경, 지연, 취소될 수 있으며, 이는 당사와
        무관합니다.
        <br />※ 본 홈페이지에 표기된 내용은 부동산 관련 법령 및 정책에 따라
        변동될 수 있습니다.
      </Text>
      <Text>
        Copyright © DAEWOO ENGINEERING & CONSTRUCTION Co., Ltd. All rights
        reserved
      </Text>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.COLORS.brown};
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};

  @media ${({ theme }) => theme.DEVICE.tablet} {
    padding: 30px 15px;
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    padding: 20px 10px;
    height: auto;
    text-align: center;
  }
`;

const LogoImg = styled.img`
  display: block;
  margin: 0 auto 20px;
  max-width: 200px;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    margin-bottom: 10px;
  }
`;

const Text = styled.p`
  margin-bottom: 16px;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
    margin-bottom: 12px;
  }
`;
