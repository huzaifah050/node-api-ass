const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

router.get('/', async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (error) {
		res.json({ message: error });
	}
});

router.post('/', async (req, res) => {
	const post = new Post({
		title: req.body.title,
		author: req.body.author,
		year: req.body.year,
	});

	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const removedPost = await Post.remove({ _id: req.params.id });
		res.json(removedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

router.patch('/:id', async (req, res) => {
	try {
		const updated = await Post.updateOne(
			{ _id: req.params.id },
			{ $set: { title: req.body.title } }
		);
		res.json(updated);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
