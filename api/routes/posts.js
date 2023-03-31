const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post({
    username:req.body.username,
    phoneno:req.body.phoneno,
    email:req.body.email,
    city:req.body.city.toUpperCase(),
    password:req.body.password,
    category:req.body.category,
    sub_cat1:req.body.sub_cat1,
    sub_cat2:req.body.sub_cat2,
    sub_cat3:req.body.sub_cat3,
    desc:req.body.desc,
    basic_price:req.body.basic_price,
    basic_time:req.body.basic_time,
    standard_price:req.body.standard_price,
     standard_time:req.body.standard_time,
    pre_price:req.body.pre_price,
    pre_time:req.body.pre_time,
    gig_title:req.body.gig_title,
    gig_desc:req.body.gig_desc,
    // photo:req.body.filename

  });
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    // } else if (catName) {
    //   posts = await Post.find({
    //     categories: {
    //       $in: [catName],
    //     },
    //   });
    } else { 
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;