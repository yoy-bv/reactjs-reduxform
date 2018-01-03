import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import 'moment-timezone'

export default {
    setPageTitle (title) {
        return (document.title = title)
    },
    showSplashScreen () {
        $('app').show()
    },
    hideSplashScreen () {
        $('app').hide()
    },
    timeZones () {
        const timeZones = moment.tz.names()
        const offsetTmz = []

        for (const i in timeZones) {
            const tz = moment.tz(timeZones[i]).format('Z').replace(':00', '').replace(':30', '.5')
            let x = (tz === 0) ? 0 : parseInt(tz, 10).toFixed(2)

            const timeZone = {
                label: `(GMT${moment.tz(timeZones[i]).format('Z')})${timeZones[i]}`,
                value: `${timeZones[i]}`,
                time: `${x}`,
            }
            offsetTmz.push(timeZone)
        }

        return _.sortBy(offsetTmz, [function (el) { return +(el.time) }])
    }
}
