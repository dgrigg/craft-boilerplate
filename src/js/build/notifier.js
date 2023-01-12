const notifier = require('node-notifier');
const path = require('path');

module.exports = options => {
  return {
    name: 'notifier',
    setup(build) {
      build.onEnd((res) => {
        if (res.errors.length > 0) {
          res.errors.forEach((e) => {
            const location = e.location;
            const title = "☠️ Error";
            const message = `${e.text}`;
            notifier.notify({
              title,
              sound: 'Submarine',
              message
            });
          });
        } else {
          notifier.notify({
            title: "🚀 Success",
            message: "Compiled Successfully!"
          });
        }
      });
    }
  }
}