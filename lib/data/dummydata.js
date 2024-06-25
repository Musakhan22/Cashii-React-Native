export const tokenData = [
  {
    text: 'BTC',
    image: require('../assets/images/btc.png'),
  },
  {
    text: 'USDT',
    image: require('../assets/images/usdt.png'),
  },
  {
    text: 'Ethereum',
    image: require('../assets/images/eth.png'),
  },
  {
    text: 'BNB',
    image: require('../assets/images/bnb.png'),
  },
  {
    text: 'TRX',
    image: require('../assets/images/trx.png'),
  },
];

export const networkData = [
  {
    value: '1',
    text: 'ERC',
  },
  {
    value: '2',
    text: 'BEP',
  },
  {
    value: '3',
    text: 'TRC20', // Corrected the duplicate value here.
  },
];

export const DATA = [
  {
    id: '0',
    title: 'Recieve Reward',
    image: require('../assets/images/coin.png'),
    selector: true,
    data: [
      // {title: 'Receive Reward:', points: 500},
      // {title: 'Receive Reward:', points: 500},
    ],
  },
  {
    id: '1',
    title: 'Twitter Follow',
    image: require('../assets/images/Dark-1.png'),
    selector: false,
    points: 500,
    // data: {
    //   points: 500,
    // },
  },
  {
    id: '2',
    title: 'Telegram Follow',
    image: require('../assets/images/telegram.png'),
    selector: false,
    points: 500,
    // data: {
    //   points: 500,
    // },
  },
  {
    id: '3',
    title: 'Daily Reward',
    image: require('../assets/images/coin-1.png'),
    selector: true,
    data: [
      // {title: 'Daily Reward:', points: 500},
      // {title: 'Daily Reward:', points: 500},
      // {title: 'Daily Reward:', points: 500},
    ],
  },
  {
    id: '4',
    title: 'Welcome Bonus',
    image: require('../assets/images/coin-1.png'),
    selector: true,
    data: [
      // {title: 'Welcome Bonus:', points: 1000},
      // {title: 'Welcome Bonus:', points: 1000},
      // {title: 'Welcome Bonus:', points: 1000},
    ],
  },
  {
    id: '5',
    title: 'Send Reward',
    image: require('../assets/images/send-reward.png'),
    selector: true,
    data: [
      // {title: 'Send Reward:', points: 1000},
      // {title: 'Send Reward:', points: 1000},
      {title: 'Send Reward:', points: 1000},
    ],
  },
  {
    id: '6',
    title: 'Invite friend Reward',
    image: require('../assets/images/users.png'),
    selector: true,
    data: [
      {title: 'Invite Friend Reward:', points: 1000},
      {title: 'Invite Friend Reward:', points: 1000},
      {title: 'Invite Friend Reward:', points: 1000},
    ],
  },
];
