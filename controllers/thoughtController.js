const { User, Thought, } = require('../models');


module.exports = {
    // Get all thoughts
    getThought(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // get single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            // .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Could not find a thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    //Thought create
    createThought(req, res) {
        Thought.create(req.body)
            .then(function (response) {
                console.log(response._id.valueOf())
                console.log(req.body.userId)
                User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: response._id.valueOf() } },
                    { runValidators: true, new: true }
                ).then(() => res.json(response))
            })

            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    //update thought through thoughtId in params and set to req.body
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Could not find a thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },


    // Delete thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then(() => res.json({ message: 'Thought was deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    createReaction(req, res) {
        console.log('You are adding a new reaction');
        console.log(req.params);
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'Could not find a thought with that ID!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete reaction
    deleteReaction(req, res) {
        console.log("You deleted a reaction!")
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.body.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'Could not find a thought with that ID :(' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    }
}