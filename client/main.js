import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { AccountsTemplates } from 'meteor/useraccounts:core'
import { Mongo } from 'meteor/mongo';

map_points = new Mongo.Collection('map_points');

import './main.html';
import './map.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});


Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.NavBar.helpers({
    user (){
        console.log(Meteor.user());
        return Meteor.user();
    },
});

Template.NavBar.events({
    'click .login'(){
        Meteor.loginWithGoogle();
    },
    'click .logout'(e) {
        e.preventDefault();
        Meteor.logout();
    }
});


