/**

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//import '../../main.html';
import './comments.html';

Template.comment.onCreated(function commentOnCreated() {
  // counter starts at 0
  //this.counter = new ReactiveVar(0);
  this.number = new ReactiveVar(0);
});

Template.comment.helpers({
  number() {
    return Template.instance().number.get();
    //return Template.instance().counter.get();
  },
});

Template.comment.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 1);
    instance.number.set(instance.number.get() + 1);
  },
});

*/
