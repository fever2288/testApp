import { Dimensions, Platform, ScaledSize } from 'react-native';
import { getNavigationBarHeight } from '../../helperFunctions/phoneFunctions';

describe('getNavigationBarHeight', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.resetModules();
  });

  const mockDimensions = (screenHeight: number, windowHeight: number) => {
    Dimensions.get = jest.fn((dim) => {
      const result: ScaledSize = {
        width: 360,
        height: dim === 'screen' ? screenHeight : windowHeight,
        scale: 2,
        fontScale: 2,
      };
      return result;
    });
  };

  it('should return the correct navigation bar height on Android', () => {
    // Mock Platform.OS to be 'android'
    Platform.OS = 'android';

    // Mock Dimensions.get to return specific screen and window heights
    mockDimensions(800, 750);

    const navigationBarHeight = getNavigationBarHeight();
    expect(navigationBarHeight).toBe(50);
  });

  it('should return 0 for navigation bar height on iOS', () => {
    // Mock Platform.OS to be 'ios'
    Platform.OS = 'ios';

    // Mock Dimensions.get to return specific screen and window heights
    mockDimensions(800, 750);

    const navigationBarHeight = getNavigationBarHeight();
    expect(navigationBarHeight).toBe(0);
  });
});
