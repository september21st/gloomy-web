import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Layout, COLOR } from '@/styles/index';
import { Icon } from '@/components/atoms';
import { Tooltip } from '@/components/molcules';

const BottomContainer = styled.div`
  ${Layout.flexRowCenter};
  position: fixed;
  bottom: 0;
  left: 0;
  height: 56px;
  width: 100%;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-evenly;
  border-top: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;

const ButtonArea = styled.div`
  cursor: pointer;
`;

export default function BottomNav(): JSX.Element {
  const router = useRouter();
  const firstPath = router.pathname.split('/')[1];

  return (
    <>
      <BottomContainer>
        <ButtonArea onClick={() => router.push('/community?locate=home')}>
          <Icon.Home fill={firstPath === 'community' ? COLOR.BLACK : COLOR.GRAY09}/>
        </ButtonArea>

        <ButtonArea onClick={() => router.push('/community/new')}>
          <Tooltip content="🔮 나누고 싶은 생각이 있나요?">
            <Icon.WriteIcon />
          </Tooltip>
        </ButtonArea>

        <ButtonArea onClick={() => router.push('/community?locate=profile')}>
          <Icon.Mypage fill={router.query['locate'] === 'profile' ? COLOR.BLACK : COLOR.GRAY09}/>
        </ButtonArea>
      </BottomContainer>
    </>
  );
}
