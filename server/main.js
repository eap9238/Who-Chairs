import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  
ServiceConfiguration.configurations.upsert(
    {
  service: "google"},
    {$set: {
  clientId: "963060634925-n06db9kgl9qculfbvfsdnm0r21hflquf.apps.googleusercontent.com",
  loginStyle: "popup",
  secret: "4xRxDbowCA0Slcx387woBjPq"
    }
}
);
});
