export default class EventBus {
  constructor () {
    this.eventHub = new Map()
  }

  $on (event, callback) {
    if (typeof callback !== 'function') {
      throw new Error('callback is not function')
    }
    if (!event) {
      throw new Error('event name is not null')
    }

    if (!this.eventHub.get(event)) {
      this.eventHub.set(event, new Set())
    }
    this.eventHub.get(event).add(callback)
  }

  $emit (event, payload) {
    if (!event) {
      throw new Error('event name is not null')
    }
    const callBackSet = this.eventHub.get(event)
    if (!callBackSet) {
      return
    }
    callBackSet.forEach(callBack => callBack(payload))
  }

  $off (event, callBack) {
    if (!event || !callBack) {
      return
    }
    const callBackSet = this.eventHub.get(event)
    if (!callBackSet) {
      return
    }
    callBackSet.delete(callBack)
  }
}
