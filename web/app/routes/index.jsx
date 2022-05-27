import { getClient } from "~/lib/sanity/getClient";

// loader() must be async!
export async function loader() {
	const articles = await getClient().fetch(
		`*[_type == "article"]{ _id, title, slug }`
	);

	return { movies };
}
export default function Index() {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
			{articles?.length > 1
				? articles.map((article) => (
						<div style={{ padding: 10 }} key={article._id}>
							<Link to={article.slug.current}>{arcicle.title}</Link>
						</div>
				  ))
				: null}
		</div>
  );
}
