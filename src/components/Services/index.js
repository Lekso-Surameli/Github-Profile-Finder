import React from 'react';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesA,
  ServicesWrapper,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Most Followed Users</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src='https://avatars0.githubusercontent.com/u/1024025?v=4' />
          <ServicesH2>Linus Torvalds
            <ServicesA target='_blank' href='https://github.com/torvalds'>@torvalds</ServicesA>
          </ServicesH2>
          <ServicesP>
            Number of Followers: 127589
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src='https://avatars1.githubusercontent.com/u/499550?v=4' />
          <ServicesH2>Evan You
            <ServicesA target='_blank' href='https://github.com/yyx990803'>@yyx990803</ServicesA>
          </ServicesH2>
          <ServicesP>
            Number of Followers: 66248
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src='https://avatars0.githubusercontent.com/u/905434?v=4' />
          <ServicesH2>Ruan YiFeng
            <ServicesA target='_blank' href='https://github.com/ruanyf'>@ruanyf</ServicesA>
          </ServicesH2>
          <ServicesP>
            Number of Followers: 64061
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src='https://avatars0.githubusercontent.com/u/810438?v=4' />
          <ServicesH2>Dan Abramov
            <ServicesA target='_blank' href='https://github.com/gaearon'>@gaearon
            </ServicesA>
          </ServicesH2>
          <ServicesP>
            Number of Followers: 62712
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='https://avatars0.githubusercontent.com/u/66577?v=4' />
          <ServicesH2>Jake Wharton
            <ServicesA target='_blank' href='https://github.com/JakeWharton'>@JakeWharton</ServicesA>
          </ServicesH2>
          <ServicesP>
            Number of Followers: 59246
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='https://avatars2.githubusercontent.com/u/25254?v=4' />
          <ServicesH2>TJ Holowaychuk
            <ServicesA target='_blank' href='https://github.com/tj'>@tj</ServicesA>
          </ServicesH2>
          <ServicesP>
            Number of Followers: 44561
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='https://avatars1.githubusercontent.com/u/170270?v=4' />
          <ServicesH2>Sindre Sorhust
            <ServicesA target='_blank' href='https://github.com/sindresorhus'>@sindresorhus</ServicesA>
          </ServicesH2>
          <ServicesP>
            Number of Followers: 40991
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='https://avatars2.githubusercontent.com/u/110953?v=4' />
          <ServicesH2>Addy Osmani
            <ServicesA target='_blank' href='https://github.com/addyosmani'>@addyosmani</ServicesA>
          </ServicesH2>
          <ServicesP>
            Number of Followers: 36740
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='https://avatars3.githubusercontent.com/u/1279609?v=4' />
          <ServicesH2>Siraj Raval
            <ServicesA target='_blank' href='https://github.com/llSourcell'>@llSourcell</ServicesA>
          </ServicesH2>
          <ServicesP>
            Number of Followers: 127589
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
