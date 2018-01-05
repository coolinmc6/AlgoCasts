// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

/*

- Creating a constructor was the first step. In the constructor, we initialize the events object
- The "on" method allows developers to specify what we want to happen when an event happens.
  - the interviewer isn't looking for anything except the idea that we can add event names to our
  events object and add the callback to our array
- The "trigger" method allows us to manually call an event. This has two major parts: first, seeing
if the event exists, second, calling each callback in the array for that event
- The "off" method turns off those callbacks. To turn them off, we just need to delete them.

*/

class Events {
	constructor() {
		this.events = {};
	}
  
	// Register an event handler

	on(eventName, callback) {
		if(this.events[eventName]) {
			this.events[eventName].push(callback)
		} else {
			this.events[eventName] = [callback];
		}
	}

	// Trigger all callbacks associated
	// with a given eventName
	trigger(eventName) {
		if(this.events[eventName]) {
			for(let cb of this.events[eventName]) {
				cb();
			}
		}
	}

	// Remove all event handlers associated
	// with the given eventName
	off(eventName) {
		
		delete this.events[eventName];
		
	}
}

module.exports = Events;
