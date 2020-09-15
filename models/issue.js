const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { fileSchema } = require('./file')

// an issue
const issueSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    position: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    address: { type: String, required: true },
    title: { type: String, required: true },
    // sidewalkIssues: [String],
    // roadIssues: [String],
    photos: [fileSchema],
    comments: String,
  },
  { timestamps: true }
)

module.exports = {
  issueSchema: issueSchema,
  Issue: mongoose.model('Issue', issueSchema),
}
