import { g, auth, config } from '@grafbase/sdk';

const User = g.model('User', {
	name: g.string().length({ min: 3, max: 25 }),
	email: g.string().unique(),
	avatarUrl: g.url(),
	description: g.string().optional(),
	gitHubUrl: g.url().optional(),
	linkedinUrl: g.url().optional(),
	articles: g
		.relation(() => Article)
		.list()
		.optional(),
});

const Article = g.model('Article', {
	title: g.string().length({ min: 15, max: 70 }),
	lid: g.string().length({ min: 55 }),
	description: g.string(),
	image: g.url(),
	category: g.string().search(),
	createdBy: g.relation(() => User),
	createdAt: g.datetime(),
	updatedAt: g.datetime(),
});

export default config({
	schema: g,
});
