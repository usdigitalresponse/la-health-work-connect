import ReactGA from 'react-ga'

export const LA_GOV_GA_TRACKING_ID = 'UA-3632381-11'
export const LA_GOV_GA_TRACKER_NAME = "la_gov_tracker"

export const USDR_GA_TRACKING_ID = 'UA-167379627-3'
export const USDR_GA_TRACKER_NAME = "usdr_tracker"


export const initTracker = (trackerId, name) => ({
    trackingId: trackerId,
    gaOptions: { name }
});

export const initGA = () => {
  console.log('GA init')
  const trackers = [
    initTracker(USDR_GA_TRACKING_ID, USDR_GA_TRACKER_NAME),
    initTracker(LA_GOV_GA_TRACKING_ID, LA_GOV_GA_TRACKER_NAME)
  ]
  ReactGA.initialize(trackers, {
        debug: true,
        alwaysSendToDefaultTracker: false
      });
}


export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.href}`)
  ReactGA.set({ page: window.location.href }, [USDR_GA_TRACKER_NAME, LA_GOV_GA_TRACKER_NAME])
  ReactGA.pageview(window.location.href, [USDR_GA_TRACKER_NAME, LA_GOV_GA_TRACKER_NAME])
}

