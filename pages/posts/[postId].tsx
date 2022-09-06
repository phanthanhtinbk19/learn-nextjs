import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import React from "react";

export interface PostPageProps {
	post: any;
}
export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(
		"https://js-post-api.herokuapp.com/api/posts?_page=1"
	);
	let data = await res.json();
	return {
		paths: data?.data?.map((post: any) => {
			return {params: {postId: post.id}};
		}),
		fallback: false,
	};
};
const PostDetailPage = ({post}: PostPageProps) => {
	if (!post) return null;
	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.description}</p>
		</div>
	);
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
	context: GetStaticPropsContext
) => {
	const postId = context.params?.postId;
	if (!postId) return {notFound: true};
	const res = await fetch(
		`https://js-post-api.herokuapp.com/api/posts/${postId}?_page=1`
	);
	let data = await res.json();

	return {
		props: {
			post: data,
		},
	};
};
export default PostDetailPage;
