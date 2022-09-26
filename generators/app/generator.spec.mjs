import { expect } from 'chai';

import { helpers, lookups } from '#test-utils';

describe('SubGenerator app of ionic JHipster blueprint', () => {
  describe('run', () => {
    let result;
    before(async function () {
      result = await helpers
        .create('jhipster:app')
        .withOptions({
          reproducible: true,
          defaults: true,
          // Skip server and client for speed
          skipServer: true,
          skipClient: true,
          blueprint: 'ionic',
        })
        .withLookups(lookups)
        .run();
    });

    it('should succeed', () => {
      expect(result.getStateSnapshot()).to.matchSnapshot();
    });
  });

  describe('with custom ionic path', () => {
    let result;
    before(async function () {
      result = await helpers
        .create('jhipster:app')
        .withOptions({
          reproducible: true,
          defaults: true,
          // Skip server and client for speed
          skipServer: true,
          skipClient: true,
          blueprint: 'ionic',
          ionicDir: '../ionic-app',
        })
        .withLookups(lookups)
        .run();
      });

    it('should succeed', () => {
      expect(result.getStateSnapshot()).to.matchSnapshot();
    });

    it('generates a package.json file at custom folder', () => {
      result.assertFile(['../ionic-app/package.json']);
    });
  });
});
