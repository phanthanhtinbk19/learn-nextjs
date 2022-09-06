import {useRouter} from "next/router";
import React from "react";

type Props = {};

const PostSlugPage = (props: Props) => {
	const router = useRouter();
	console.log(router.query.slug);

	return <div>PostSlugPage</div>;
};

export default PostSlugPage;
