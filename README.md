# BetterDiscord Plugin Notices Library

# NOTICE

This library is deprecated in favor of [betterdiscord-plugin-libs](https://www.npmjs.com/package/betterdiscord-plugin-libs).

---

> Library to assist in displaying notices in various locations for BetterDiscord plugins.

[![NPM](https://nodei.co/npm/betterdiscord-plugin-notices.png)](https://nodei.co/npm/betterdiscord-plugin-notices/)

Full Documentation: https://notmike101.github.io/betterdiscord-plugin-notices/

## Installation

```
npm install betterdiscord-plugin-notices
```

## Usage

This plugin **should** be compatible with both ESM and CJS.

To display a notice, use the `createNotice` method. This method returns a number containing the internal ID of the notice.

## Example

**CJS**

```javascript
const { Notices } = require('betterdiscord-plugin-notices');

class Plugin {
  load() {
    this.notices = new Notices();
  }

  start() {
    this.notices.createNotice({
      type: 'default',
      position: 'bottom-right',
      text: 'This is a test notice',
    });
  }
}

module.exports = Plugin;
```

**ESM**
```javascript
import { Notices } from 'betterdiscord-plugin-notices';

class Plugin {
  load() {
    this.notices = new Notices();
  }

  start() {
    this.notices.createNotice({
      type: 'default',
      position: 'bottom-right',
      text: 'This is a test notice',
    });
  }
};

export default Plugin;
```
