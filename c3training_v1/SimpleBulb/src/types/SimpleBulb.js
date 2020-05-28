/*
* Returns the measurement the period of 
* the lightbulb in days (only first event). 
*/
function eventDurationInMins(bulbId){

  var bulb, bulbEvent, bulbEvents, eventFilter, startTime, endTime, duration, durationInMins;
  bulb = SimpleBulb.get({id:bulbId});
  eventFilter = "simpleBulb.id == '" + bulbId + "'";
  bulbEvents = SimpleBulbEvent.fetch({filter:eventFilter});
  bulbEvent = bulbEvents.objs[0];
  startTime = bulbEvent.start;
  endTime = bulbEvent.end;
  duration = endTime - startTime;
  durationInMins = duration / (1000*60);
  return durationInMins;

}

