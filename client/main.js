import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Accounts } from 'meteor/accounts-base';
import { AccountsTemplates } from 'meteor/useraccounts:core'
import { Mongo } from 'meteor/mongo';
import { chairReport } from './chair_report';

map_points = new Mongo.Collection('map_points');

import './main.html';
import './map.html';
import 'bootstrap/dist/css/bootstrap.css';

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

Template.mapMode.onCreated(function mapModeOnCreated() {
    this.addModeActive = new ReactiveVar(true);
});

Template.mapMode.helpers({
    addMode() {
        return Template.instance().addModeActive.get();
    },
});

Template.map.helpers({
    addMode(){
        return Template.instance().addModeActive.get();
    }
});

Template.mapMode.events({
    'change #option2'(event, instance) {
        instance.addModeActive.set(false);
    },
    'change #option1'(event, instance) {
        instance.addModeActive.set(true);
    }
});

Template.chair_report.events({
  toggle() {
    modal.this.setState.set(true);
  }
  handleSubmit(event) {
    this.setState.({name: event.target.value});
  }
})
