import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      backgroundColor: appStyle.calendarBackground
    },
    containerYear: {
      minHeight: 280
    },
    selectedYear: {
      fontSize: 20,
      color: appStyle.selectedYearColor
    },
    simpleYear: {
      fontSize: 18,
      color: appStyle.textColor
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      marginTop: 7,
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayContainer: {
      width: 32
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

