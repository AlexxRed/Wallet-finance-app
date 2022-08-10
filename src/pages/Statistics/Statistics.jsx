import Balance from 'components/Balance/Balance.jsx';
import Currency from 'components/Currency/Currency.jsx';
import Navigation from 'components/Navigation/Navigation.jsx';
import DiagramTab from 'components/DiagramTab/DiagramTab.jsx';

import {
  CurrencyWrapper,
  HomeInfo,
  NavBalWrapper,
  // Elips1,
} from '../Dashboard/Dashboard.styled';
import { AsideWrapper, BalanceWrapper } from './Statistics.styled';
import { toggleCurrencyView } from 'redux/global/global-slice';
import globalSelectors from 'redux/global/global-selectors';
import { useDispatch, useSelector } from 'react-redux';

export default function Statistics() {
  const dispatch = useDispatch();
  const viewCurrency = useSelector(globalSelectors.getIsCurrencyView);

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      dispatch(toggleCurrencyView(false));
    }
  });

  return (
    <AsideWrapper>
      <HomeInfo>
        <NavBalWrapper>
          <Navigation viewCurrency={viewCurrency} />
          <BalanceWrapper>
            <Balance />
          </BalanceWrapper>
        </NavBalWrapper>
        <CurrencyWrapper>
          <Currency />
        </CurrencyWrapper>
      </HomeInfo>
      <DiagramTab />
    </AsideWrapper>
  );
}
