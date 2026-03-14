import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { slug } from "../util/slug";

export async function GET(context) {
    const preSort = await slug('blog');
    const blog = preSort.sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime(),
    )
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: blog.map((post) => ({
            title: `${post.data.date}`,
            date: post.data.date,
            description: `new post - ${post.data.title}`,
            link: `https://lowercase.name/blog/${post.id}/`,
        })),
    });
}