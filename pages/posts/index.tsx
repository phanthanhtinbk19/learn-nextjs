import {GetStaticProps} from "next";
import Link from "next/link";
import React from "react";

export interface PostPageListProps {
	posts: any[];
}
const PostPageList = ({posts}: PostPageListProps) => {
	return (
		<div>
			<h1>Posts Pages List</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export const getStaticProps: GetStaticProps<PostPageListProps> = async () => {
	const res = await fetch(
		"https://js-post-api.herokuapp.com/api/posts?_page=1"
	);
	let data = await res.json();
	return {
		props: {
			posts: data.data,
		},
	};
};
export default PostPageList;
