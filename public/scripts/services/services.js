myApp.service('messageService', function($http) {
  var sv = this;

  sv.getMessages = function() {
    console.log('in getMessages');
    return $http({
      method: 'GET',
      url: '/messages',
    }).then(function(response) {
      sv.allMessages = response;
      console.log(sv.allMessages);
    });
  };

  sv.addMessage = function(newMessage) {
    console.log('in addMessage:', newMessage);
    $http({
      method: 'POST',
      url: '/messages',
      data: newMessage
    });
  };

});
