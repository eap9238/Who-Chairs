Comments = new Mongo.Collection('comments');

Comments.attachSchema(new SimpleSchema({
  text: {
    label: "comment text",
    type: String,
    optional: false
  },
  user: {
    label: "username",
    type: String,
    optional: false
  },
  date: {
    label: "comment date",
    type: DateTime,
    optional: false
  },
}));
