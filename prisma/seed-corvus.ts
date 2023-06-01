import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

type Corvus = {
	asa: Int;
	title: String;
	imageref: String;
	owner: String;
	slug: Int;
	artist: String;
};

async function getCorvus() {
	const response = await fetch('https://dummyjson.com/posts');
	const { posts } = await response.json();
	return posts as Corvus[];
}

function slugify(text: string) {
	return text
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.toLowerCase();
}

async function main() {
	const posts = await getCorvus();

	for (const post of posts) {
		await db.post.create({
			data: {
				title: post.title,
				content: post.body,
				slug: slugify(post.title)
			}
		});
	}
}

main();
