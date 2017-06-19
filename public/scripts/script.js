var myApp = angular.module('myApp', []);

myApp.controller('messages', function($http, messageService) {
  var vm = this;

  vm.postMessages = function() {
    console.log('in postRentals');
    messageService.getMessages().then(function() {
      console.log('back in controller:', messageService.allMessages.data);
      vm.messages = messageService.allMessages.data;
    });
  }; // postRentals

  vm.newMessage = function() {
    console.log('in newMessage');
    var messageToAdd = {
      name: vm.name,
      message: vm.message
    }; // end newMessage
    messageService.addMessage(messageToAdd);
  };

});
