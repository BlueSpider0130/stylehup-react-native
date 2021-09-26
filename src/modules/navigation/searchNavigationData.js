import SearchResultScreen from '../search/SearchResultViewContainer';
// import CalendarScreen from '../calendar/CalendarViewContainer';

const iconHome = require('../../../assets/images/tabbar/home.png');
// const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../../assets/images/tabbar/grids.png');
const iconPages = require('../../../assets/images/tabbar/pages.png');
const iconComponents = require('../../../assets/images/tabbar/components.png');

const searchNavigationData = [
  {
    name: 'Search',
    component: SearchResultScreen,
    icon: iconHome,
  },
  // {
  //   name: 'Calendar',
  //   component: CalendarScreen,
  //   icon: iconCalendar,
  // },
];

export default searchNavigationData;