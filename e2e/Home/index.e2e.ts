/* eslint-env detox/detox, mocha */

describe('Test', () => {
  it('test', async () => {
    await device.reloadReactNative();
    await element(by.id('id')).typeText('text');
  });
});
