const { Post } = require('../models');

const postData = [{
        title: 'McAfee vs Kaspersky: Compare EDR software',
        content: 'McAfee and Kaspersky are some of the oldest, most trusted names in the antivirus business, but their ideal use cases vary. See which is best for you.',
        user_id: 1

    },
    {
        title: 'How to use aliases in Exchange Online so customers don’t know your real email address',
        content: 'Exchange Online now makes it easy to manage and use aliases with Outlook.',
        user_id: 2
    },
    {
        title: 'How to use Apple Clips to shoot quick videos for your business',
        content: 'How to use Apple Clips to shoot quick videos for your business.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;