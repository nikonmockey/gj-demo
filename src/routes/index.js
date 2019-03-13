import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'redaction'

import {
  Home,
  Auth,
  Bot,
  PartnerPaymentsHistory,
  PoolStats,
  MiningPaymentsHistory,
  SubAccounts,
  PartnerDashboard,
  MarketingTools,
  ConnectingInstruction,

  Profile,
  TwoFactor,
} from 'pages'

import {
  MainLayout,
  PageWrapper,
  Header,
  Footer,
  Nav,
  LoginLayout,
} from 'components/layouts'


const Routes = ({ isLoggedIn, match: { url } }) =>
    isLoggedIn
      ? (<MainLayout>
          <Nav />
          <Header />
          <PageWrapper>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/bot-dashboard" component={Bot.Dashboard} />
              <Route exact path="/bot-payments-history" component={Bot.Payments} />

              <Route exact path="/pool-stats" component={PoolStats} />
              <Route exact path="/partner-payments-history" component={PartnerPaymentsHistory} />
              <Route exact path="/mining-payments-history" component={MiningPaymentsHistory} />
              <Route exact path="/subaccounts" component={SubAccounts} />
              <Route exact path="/partner-dashboard" component ={PartnerDashboard} />
              <Route exact path="/marketing-tools" component={MarketingTools} />
              <Route exact path="/connecting-instruction" component={ConnectingInstruction} />

              <Route exact path="/personal-data" component={Profile} />
              <Route exact path="/2fa" component={TwoFactor} />
              {/*<Route path="/404" component={Page404} />*/}
              {/*<Route path="*" component={NoMatch} />*/}
              <Redirect to={url} />
            </Switch>
          </PageWrapper>
          <Footer />
        </MainLayout>)
      : (
          <LoginLayout>
            <Switch>
              <Route exact path="/reg" component={Auth.Reg} />
              <Route exact path="/restore" component={Auth.Restore} />
              <Route exact path="/*" component={Auth.Login} />
            </Switch>
          </LoginLayout>
        )


export default connect({
  isLoggedIn: 'auth.isLoggedIn',
})(Routes)
