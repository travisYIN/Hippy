import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
} from '@hippy/react';

const imgURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAtCAMAAABmgJ64AAAAOVBMVEX/Rx8AAAD/QiL/Tif/QyH/RR//QiH/QiP/RCD/QSL/Qxz/QyH/QiL/QiD/QyL/QiL/QiH/QyH/QiLwirLUAAAAEnRSTlMZAF4OTC7DrWzjI4iietrRk0EEv/0YAAAB0UlEQVRYw72Y0Y6sIAxAKwUFlFH7/x97izNXF2lN1pU5D800jD2hJAJCdwYZuAUyVbmToKh903IhQHgErAVH+ccV0KI+G2oBPMxJgPA4WAigAT8F0IRDgNAE3ARyfeMFDGSc3YHVFkTBAHKDAgkEyHjacae/GTjxFqAo8NbakXrL9DRy9B+BCQwRcXR9OBKmEuAmAFFgcy0agBnIc1xZsMPOI5loAoUsQFmQjDEL9YbpaeGYBMGRKKAuqFEFL/JXApCw/zFEZk9qgbLGBx0gXLISxT25IUBREEgh1II1fph/IViGnZnCcDDVAgfgVg6gCy6ZaClySbDQpAl04vCGaB4+xGcFRK8CLvW0IBb5bQGqAlNwU4C6oEIVTLTcmoEr0AWcpKsZ/H0NAtkLQffnFjkOqiC/TTWBL9AFCwXQBHgI7rXImMgjCZwFa50s6DRBXyALmIECuMASiWNPFgRTgSJwM+XW8PDCmbwndzdaNL8FMYXPNjASDVChnIvWlBI/MKadPV952HszbmXtRERhhQ0vGFA52SVSSVt7MjHvxfRK8cdTpqovn02dUcltMrwiKf+wQ1FxXKCk9en6e/eDNnP44h2thQEb35O/etNv/q3iHza+KuhqqhZAAAAAAElFTkSuQmCC';
const imgURL2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMA9QlZEMPc2Mmmj2VkLEJ4Rsx+pEgAAAChSURBVCjPjVLtEsMgCDOAdbbaNu//sttVPes+zvGD8wgQCLp/TORbUGMAQtQ3UBeSAMlF7/GV9Cmb5eTJ9R7H1t4bOqLE3rN2UCvvwpLfarhILfDjJL6WRKaXfzxc84nxAgLzCGSGiwKwsZUB8hPorZwUV1s1cnGKw+yAOrnI+7hatNIybl9Q3OkBfzopCw6SmDVJJiJ+yD451OS0/TNM7QnuAAbvCG0TSAAAAABJRU5ErkJggg==';
const imgURL3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEnRSTlMA/QpX7WQU2m27pi3Ej9KEQXaD5HhjAAAAqklEQVQoz41SWxLDIAh0RcFXTHL/yzZSO01LMpP9WJEVUNA9gfdXTioCSKE/kQQTQmf/ArRYva+xAcuPP37seFII2L7FN4BmXdHzlEPIpDHiZ0A7eIViPcw2QwqipkvMSdNEFBUE1bmMNOyE7FyFaIkAP4jHhhG80lvgkzBODTKpwhRMcexuR7fXzcp08UDq6GRbootp4oRtO3NNpd4NKtnR9hB6oaefweIFQU0EfnGDRoQAAAAASUVORK5CYII=';
const imgURL4 = 'https://user-images.githubusercontent.com/12878546/148736255-7193f89e-9caf-49c0-86b0-548209506bd6.gif';
const DEFAULT_VALUE = 'The 58-letter name Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch is the name of a town on Anglesey, an island of Wales.';

const DESIGN_WIDTH = 750
let BASE_SIZE =
    DESIGN_WIDTH /
      (Dimensions.get('screen').width / Dimensions.get('screen').height < 0.8
        ? Dimensions.get('screen').width
        : Dimensions.get('screen').width /
          1.8) /** 宽高比大于0.8，需要适配缩放比例 */

function rem(length) {
  // NOTE: hippy 的类型定义中，许多样式只允许 number，但我们转 web 时都是用 rem 单位必须用
  // 字符串，一种方案是改 hippy 的类型定义，一个是这里强转一下。
  // 由于 hippy 确实是只接受数字单位，转 web 只是降级方案，这里以 hippy 为准，仅做强制转换
  const num = length / BASE_SIZE
  return num
}

const styles = StyleSheet.create({
  itemTitle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e0e0e0',
    borderRadius: 2,
    backgroundColor: '#fafafa',
    padding: 10,
    marginTop: 10,
  },
  itemContent: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 2,
    borderColor: '#e0e0e0',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  normalText: {
    fontSize: 14,
    lineHeight: 18,
    color: 'black',
    fontWeight: 'normal'
  },
  buttonBar: {
    flexDirection: 'row',
    marginTop: 10,
    flexGrow: 1,
  },
  button: {
    height: 24,
    borderColor: '#4c9afa',
    borderWidth: 1,
    borderStyle: 'solid',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'center',
  },
  buttonText: {
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  customFont: {
    color: '#0052d9',
    fontSize: 32,
    fontFamily: 'TTTGB',
  },
});
let i = 0;
export default class TextExpo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      fontSize: 16,
      fontWeight: '400',
      textShadowColor: 'grey',
      textShadowOffset: {
        x: 1,
        y: 1,
      },
      scrollColor: 'gray',
      numberOfLines: 2,
      ellipsizeMode: undefined,
    };
    this.incrementFontSize = this.incrementFontSize.bind(this);
    this.decrementFontSize = this.decrementFontSize.bind(this);
    this.incrementFontWeight = this.incrementFontWeight.bind(this);
    this.decrementFontWeight = this.decrementFontWeight.bind(this);
    this.incrementLine = this.incrementLine.bind(this);
    this.decrementLine = this.decrementLine.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  incrementFontWeight() {
    const { fontWeight } = this.state;
    if (fontWeight === '1000') {
      return;
    }
    let weightNumber = parseInt(fontWeight, 10);
    weightNumber += 100;
    this.setState({
      fontWeight: weightNumber.toString(),
    });
  }

  decrementFontWeight() {
    const { fontWeight } = this.state;
    if (fontWeight === '100') {
      return;
    }
    let weightNumber = parseInt(fontWeight, 10);
    weightNumber -= 100;
    this.setState({
      fontWeight: weightNumber.toString(),
    });
  }
  incrementFontSize() {
    const { fontSize } = this.state;
    if (fontSize === 24) {
      return;
    }
    this.setState({
      fontSize: fontSize + 1,
    });
  }

  decrementFontSize() {
    const { fontSize } = this.state;
    if (fontSize === 6) {
      return;
    }
    this.setState({
      fontSize: fontSize - 1,
    });
  }

  incrementLine() {
    const { numberOfLines } = this.state;
    if (numberOfLines < 6) {
      this.setState({
        numberOfLines: numberOfLines + 1,
      });
    }
  }

  decrementLine() {
    const { numberOfLines } = this.state;
    if (numberOfLines > 1) {
      this.setState({
        numberOfLines: numberOfLines - 1,
      });
    }
  }

  changeMode(mode) {
    this.setState({ ellipsizeMode: mode });
  }

  changeColor() {
    this.setState({ scrollColor: 'red' });
  }

  changeBreakStrategy(breakStrategy) {
    this.setState({ breakStrategy });
  }

  render() {
    return (
      <View
        style={{
          paddingLeft: rem(24),
          paddingRight: rem(44),
          backgroundColor: "pink",
        }}
      >
        <Text>
          <Text style={{ fontSize: rem(26) }}>
            {
              'หวงซิง ชิวติ่งเจี๋ย ยอด ดีเลิศ เด็ดขาด อันดับหนึ่ง ศักดิ์สิทธิ์ มหัศจรรย์ ที่สุด สุดยอด เยี่ยม ยอดเยี่ยม ยอด เยี่ยมยอด ดีที่สุด เลิศที่สุด ชนะเลิศ เลิศเลอ ดีเด่น สุดเหวี่ยง วิเศษ ฮีโร่ บริสุทธิ์ ล้ำเลิศ ชั้นเลิศ เลิศล้ำ เด็ด หนึ่งเดียว พิเศษ ยอดไปเลย เยี่ยมไปเลย ที่หนึ่งเลย โดดเด่น'
              // '123'
            }
          </Text>
        </Text>
      </View>
    );
  }
}
