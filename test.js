const sense = require('./index')

try {
    sense({email: "email", password: "password", verbose: false})
    .then(mySense => {
        mySense.getDevices().then(devices => {
            console.log(devices);
        })
        mySense.getMonitorInfo().then(monitor => {
            console.log(monitor);
        })
        mySense.getTimeline().then(timeline => {
            console.log(timeline);
        })
    })
} catch (err) {
    throw err
}