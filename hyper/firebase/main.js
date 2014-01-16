whenDataIsReceived = function(callback) {
  database.limit(10).on('child_added', function (snapshot) {
    var message = snapshot.val();
    callback(message);
  });
}

formattedDate = function(date) {
  var date = new Date(date).toString();
  return date.substring(0, date.length-15);
}